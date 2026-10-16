import os
import sys
import shutil
from PIL import Image

sys.stdout.reconfigure(encoding='utf-8')

src_dir = r'c:\Users\DELL\Desktop\Fagon Web\tmp\Fagon_Demo'
dest_dir = r'c:\Users\DELL\Desktop\Fagon Web\public\assets\demos'
os.makedirs(dest_dir, exist_ok=True)

# Mapping from source file in tmp/Fagon_Demo to standard slug name in public/assets/demos
file_mapping = {
    'FG-SHOP-01-before.png': 'shop-before-hanger',
    'FG-SHOP-01-after.png': 'shop-after-model',
    'FG-SHOP-02.png': 'shop-product-cgi',
    'FG-SHOP-03-poster.png': 'shop-video-concept',
    'FG-SHOP-04.png': 'shop-lookbook-ui',
    'FG-EDU-02.png': 'edu-slide-preview',
    'FG-EDU-03.png': 'edu-storyboard',
    'FG-OFF-01.png': 'office-report-slide',
    'FG-OFF-02.png': 'office-infographic',
    'FG-STU-01.png': 'student-deck',
    'FG-STU-02.png': 'student-poster',
    'FG-STU-03.png': 'student-portfolio-ui',
    'FG-CRE-01.png': 'creator-character',
    'FG-CRE-02.png': 'creator-storyboard',
}

print('=== BẮT ĐẦU CHUYỂN ĐỔI & TỐI ƯU HÓA 14 ẢNH DEMO ===')

for src_file, slug in file_mapping.items():
    src_path = os.path.join(src_dir, src_file)
    if not os.path.exists(src_path):
        print(f'LỖI: Không tìm thấy {src_file}')
        continue
    
    im = Image.open(src_path)
    w, h = im.size
    
    # 1. Save optimized WebP
    webp_path = os.path.join(dest_dir, f'{slug}.webp')
    im.save(webp_path, 'WEBP', quality=92, method=6)
    webp_size_kb = os.path.getsize(webp_path) / 1024
    
    # 2. Save high-res optimized PNG
    png_path = os.path.join(dest_dir, f'{slug}.png')
    im.save(png_path, 'PNG', optimize=True)
    png_size_kb = os.path.getsize(png_path) / 1024

    # 3. Also save with original code name as WebP for clear reference
    code_base = os.path.splitext(src_file)[0]
    code_webp = os.path.join(dest_dir, f'{code_base}.webp')
    im.save(code_webp, 'WEBP', quality=92, method=6)
    
    print(f'✓ {src_file:22} -> {slug}.webp ({w}x{h}, {webp_size_kb:.1f} KB) & {slug}.png ({png_size_kb:.1f} KB)')

print('=== HOÀN TẤT XỬ LÝ TOÀN BỘ 14 TÀI NGUYÊN DEMO ===')
