import os
from PIL import Image

BANNERS = [
    ("giao-vien", r"C:/Users/DELL/.gemini/antigravity/brain/ec6181aa-1101-44a0-ba0e-c3f2ab2545c9/.user_uploaded/media_1792144627391_1ce89cce.png"),
    ("nguoi-ban-hang", r"C:/Users/DELL/.gemini/antigravity/brain/ec6181aa-1101-44a0-ba0e-c3f2ab2545c9/.user_uploaded/media_1792144627409_53b8b76f.png"),
    ("van-phong", r"C:/Users/DELL/.gemini/antigravity/brain/ec6181aa-1101-44a0-ba0e-c3f2ab2545c9/.user_uploaded/media_1792144627442_027bc4da.png"),
    ("sinh-vien", r"C:/Users/DELL/.gemini/antigravity/brain/ec6181aa-1101-44a0-ba0e-c3f2ab2545c9/.user_uploaded/media_1792144627446_c64ad99c.png"),
    ("sang-tao", r"C:/Users/DELL/.gemini/antigravity/brain/ec6181aa-1101-44a0-ba0e-c3f2ab2545c9/.user_uploaded/media_1792144627546_d6f36420.png"),
]

out_dir = os.path.join("public", "assets", "banners")
os.makedirs(out_dir, exist_ok=True)

for slug, src_path in BANNERS:
    with Image.open(src_path) as im:
        rgb = im.convert("RGB")
        w, h = rgb.size

        # 1. Full banner WebP (high quality, fast loading)
        webp_full_path = os.path.join(out_dir, f"banner-{slug}.webp")
        rgb.save(webp_full_path, "WEBP", quality=88, method=6)

        # 2. Full banner optimized PNG (for Open Graph sharing compatibility)
        png_full_path = os.path.join(out_dir, f"banner-{slug}.png")
        rgb.save(png_full_path, "PNG", optimize=True)

        # 3. Right-side visual studio scene crop (x from 540 to 1024, 484x394) for compact cards
        crop_box = (540, 0, w, h)
        scene_crop = rgb.crop(crop_box)
        webp_scene_path = os.path.join(out_dir, f"scene-{slug}.webp")
        scene_crop.save(webp_scene_path, "WEBP", quality=88, method=6)

        print(
            f"Processed {slug}: full={os.path.getsize(webp_full_path)//1024}KB (webp), "
            f"scene={os.path.getsize(webp_scene_path)//1024}KB (webp)"
        )
