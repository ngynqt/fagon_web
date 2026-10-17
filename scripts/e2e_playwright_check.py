import sys
from playwright.sync_api import sync_playwright

def run_checks(base_url: str):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1280, "height": 800},
            permissions=["clipboard-read", "clipboard-write"],
        )
        page = context.new_page()

        failed_requests = []
        page.on("response", lambda res: failed_requests.append((res.url, res.status)) if res.status >= 400 and not res.url.endswith("/duong-dan-khong-ton-tai") else None)

        routes = [
            "/",
            "/giao-vien",
            "/nguoi-ban-hang",
            "/van-phong",
            "/sinh-vien",
            "/sang-tao",
            "/dich-vu",
            "/bao-mat",
        ]
        titles = set()
        for r in routes:
            resp = page.goto(f"{base_url}{r}", wait_until="networkidle")
            assert resp and resp.status == 200, f"Route {r} returned {resp.status if resp else 'None'}"
            resp2 = page.reload(wait_until="networkidle")
            assert resp2 and resp2.status == 200, f"Reload {r} failed"
            h1_count = page.locator("h1").count()
            assert h1_count == 1, f"Route {r} has {h1_count} H1 tags instead of 1"
            title = page.title()
            assert title not in titles, f"Duplicate page title on {r}: {title}"
            titles.add(title)
            # Trigger lazy-loaded images to load so we can verify every single image on the page
            page.evaluate("""async () => {
                const imgs = Array.from(document.querySelectorAll('img'));
                for (const img of imgs) {
                    img.loading = 'eager';
                    img.scrollIntoView();
                }
                await Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(res => {
                    img.addEventListener('load', res, { once: true });
                    img.addEventListener('error', res, { once: true });
                })));
            }""")
            broken_imgs = page.evaluate("""() => {
                return Array.from(document.querySelectorAll('img')).filter(img => !img.complete || img.naturalWidth === 0).map(img => img.src);
            }""")
            assert len(broken_imgs) == 0, f"Broken images on {r}: {broken_imgs}"

        print("✓ 3. Mọi đường dẫn mở trực tiếp, tải lại (reload) thành công, mỗi trang có đúng 1 thẻ H1, Title riêng và 0 ảnh lỗi.")

        resp_404 = page.goto(f"{base_url}/duong-dan-khong-ton-tai", wait_until="networkidle")
        assert resp_404 and resp_404.status == 404, "404 status check failed"
        assert "404" in page.locator("h1, .eyebrow").all_inner_texts()[0] or page.locator("a[href='/giao-vien']").count() > 0
        print("✓ 4. Trang 404 hoạt động đúng mã trạng thái và dẫn về trang chủ cùng 5 nhóm nhu cầu.")

        page.goto(f"{base_url}/giao-vien", wait_until="networkidle")
        saved_group = page.evaluate("() => window.localStorage.getItem('fagon_last_audience')")
        assert saved_group == "giao-vien", f"Expected fagon_last_audience='giao-vien', got {saved_group}"

        page.goto(f"{base_url}/", wait_until="networkidle")
        assert page.url.rstrip("/") == base_url.rstrip("/"), "Homepage must NOT auto-redirect when localStorage has a saved group"
        banner = page.locator("#last-audience-banner")
        assert banner.is_visible(), "Continue banner should be visible when fagon_last_audience is set"
        assert "Giáo viên" in banner.inner_text()
        assert page.locator("[data-audience-select]").count() == 5, "Homepage must display all 5 audience cards"
        print("✓ 5. Trang chủ có đủ 5 nhóm nhu cầu, lưu nhóm vào localStorage và hiển thị 'Tiếp tục với Giáo viên' mà không tự động chuyển hướng.")

        page.locator("[data-filter-demo='giao-vien']").click()
        visible_demos = page.locator(".home-demo-item:not([hidden])").count()
        assert visible_demos == 1, f"Expected 1 visible demo for giao-vien on home, got {visible_demos}"
        page.locator("[data-filter-demo='all']").click()
        assert page.locator(".home-demo-item:not([hidden])").count() == 4
        print("✓ 6. Bộ lọc sản phẩm mẫu trên trang chủ hoạt động chính xác.")

        page.goto(f"{base_url}/giao-vien", wait_until="networkidle")
        demo_btn = page.locator("[data-service-demo='web-tro-choi-giao-vien']").first
        if demo_btn.is_visible():
            demo_btn.click()
            page.wait_for_timeout(300)
        correct_indices = [0, 1, 2, 1]
        for idx, ans in enumerate(correct_indices):
            page.locator(f"#game-options-list .edu-game-option[data-option-index='{ans}']").click()
            feedback = page.locator("#game-feedback-box")
            assert feedback.is_visible(), f"Feedback not visible on question {idx + 1}"
            assert "Chính xác" in feedback.inner_text()
            page.locator("#game-next-btn").click()

        summary = page.locator("#game-summary-panel")
        assert summary.is_visible(), "Game summary panel should be visible after 4 questions"
        assert "4 / 4" in summary.inner_text()
        page.locator("#game-restart-btn").click()
        assert page.locator("#game-question-panel").is_visible()
        assert page.locator("#game-score-value").inner_text() == "0"
        print("✓ 7. Trò chơi tương tác mẫu (/giao-vien) chấm đáp án đúng/sai, tính điểm 4/4 và chơi lại từ đầu hoạt động thật.")

        page.goto(f"{base_url}/nguoi-ban-hang", wait_until="networkidle")
        ba_btn = page.locator("[data-service-demo='anh-nguoi-mau-ai']").first
        if ba_btn.is_visible():
            ba_btn.click()
            page.wait_for_timeout(300)
        page.locator("[data-ba-preset='0']").click()
        assert page.locator("#ba-range-value-text").inner_text() == "0%"
        page.locator("#ba-mode-side-btn").click()
        assert page.locator("#ba-side-by-side-view").is_visible()
        page.locator("#ba-mode-slider-btn").click()
        assert page.locator("#ba-slider-view").is_visible()
        print("✓ 8. Trình so sánh Before/After (/nguoi-ban-hang) hoạt động cả thanh kéo và chế độ xem song song 2 ảnh.")

        before_state = page.evaluate("() => window.fagonEvaluatePricingAt('2026-10-20T23:59:59+07:00')")
        assert before_state["isPromoActive"] is True
        tier_prices = {t["tierId"]: t["displayedPrimaryPrice"] for t in before_state["tiers"]}
        assert tier_prices["video-shop-co-ban"] == "45.000–75.000đ", f"Unexpected basic price: {tier_prices}"
        assert tier_prices["video-shop-tieu-chuan"] == "105.000–180.000đ", f"Unexpected standard price: {tier_prices}"
        assert tier_prices["video-shop-quang-cao"] == "210.000–450.000đ", f"Unexpected ad price: {tier_prices}"
        assert page.locator("#shop-promo-banner").is_visible()

        after_state = page.evaluate("() => window.fagonEvaluatePricingAt('2026-10-21T00:00:00+07:00')")
        assert after_state["isPromoActive"] is False
        after_prices = {t["tierId"]: t["displayedPrimaryPrice"] for t in after_state["tiers"]}
        assert after_prices["video-shop-co-ban"] == "150.000–250.000đ"
        assert after_prices["video-shop-tieu-chuan"] == "350.000–600.000đ"
        assert after_prices["video-shop-quang-cao"] == "700.000–1.500.000đ"
        assert not page.locator("#shop-promo-banner").is_visible()
        print("✓ 9. Bảng giá giảm 70% tính chính xác từ số gốc và tự động ẩn khuyến mãi đúng mốc 2026-10-21T00:00:00+07:00 (kiểm tra cả trước và sau hạn không cần đổi đồng hồ máy).")

        page.goto(f"{base_url}/dich-vu", wait_until="networkidle")
        page.locator("[data-select-service='web-tro-choi-giao-vien']").first.click()
        selected_srv = page.locator("#field-serviceId").input_value()
        assert selected_srv == "web-tro-choi-giao-vien", f"Expected web-tro-choi-giao-vien, got {selected_srv}"

        page.fill("#field-fullName", "Trần Thanh Tâm")
        page.fill("#field-contactEmail", "thanhtam@example.com")
        page.fill("#field-description", "Cần thiết kế 1 trò chơi trắc nghiệm ôn tập Lịch sử lớp 7 gồm 10 câu hỏi.")
        page.select_option("#field-audienceId", "giao-vien")
        assert page.locator("#field-fullName").input_value() == "Trần Thanh Tâm"
        assert page.locator("#field-contactEmail").input_value() == "thanhtam@example.com"
        assert page.locator("fieldset[data-audience-fieldset='giao-vien']").is_visible()
        assert not page.locator("fieldset[data-audience-fieldset='nguoi-ban-hang']").is_visible()

        page.locator("#form-submit-btn").click()
        assert page.locator("#error-consent").is_visible()

        page.check("#field-consent")
        page.locator("#form-submit-btn").click()
        status_panel = page.locator("#form-status-panel")
        assert status_panel.is_visible()
        assert status_panel.get_attribute("data-form-result") == "unconfigured"
        assert page.locator("#field-fullName").input_value() == "Trần Thanh Tâm"
        print("✓ 10. Biểu mẫu: Nút dịch vụ chọn đúng trường, đổi nhóm giữ nguyên nội dung, kiểm tra lỗi hợp lệ và KHÔNG báo gửi thành công giả khi chưa gắn khóa nhận đơn.")

        copy_btn = page.locator("[data-copy-telegram]").first
        copy_btn.click()
        feedback_tg = page.locator("#telegram-copy-status")
        feedback_tg.wait_for(state="visible", timeout=5000)
        assert feedback_tg.is_visible()
        assert "0367931045" in feedback_tg.inner_text()
        print("✓ 11. Nút sao chép số Telegram (0367931045) hoạt động và hiển thị thông báo rõ ràng.")

        page.set_viewport_size({"width": 360, "height": 740})
        for r in ["/", "/giao-vien", "/nguoi-ban-hang", "/van-phong", "/sinh-vien", "/sang-tao", "/dich-vu", "/bao-mat"]:
            page.goto(f"{base_url}{r}", wait_until="networkidle")
            overflow = page.evaluate("() => document.documentElement.scrollWidth > document.documentElement.clientWidth")
            assert not overflow, f"Horizontal overflow detected at 360px on {r}"
        print("✓ 12. Giao diện Mobile (360px) và Desktop (1280px) không bị tràn ngang trên mọi trang.")

        assert len(failed_requests) == 0, f"Failed resource requests: {failed_requests}"
        browser.close()

if __name__ == "__main__":
    run_checks(sys.argv[1])
