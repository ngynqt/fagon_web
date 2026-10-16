import os
import base64
import numpy as np
from PIL import Image

src_path = r'C:\Users\DELL\.gemini\antigravity-ide\brain\d991a4ec-f84b-46ab-b23b-7179cfba1b07\.user_uploaded\media_1792143293671.png'
out_dir = r'c:\Users\DELL\Desktop\Fagon Web\public\assets'
public_dir = r'c:\Users\DELL\Desktop\Fagon Web\public'
os.makedirs(out_dir, exist_ok=True)

# 1. Save original source copy
im = Image.open(src_path).convert('RGBA')
im.save(os.path.join(out_dir, 'logo-source.png'), 'PNG')

arr = np.array(im, dtype=np.float32)
bg = np.array([253.0, 253.5, 249.0])
dist = np.sqrt(np.sum((arr[:, :, :3] - bg)**2, axis=-1))

# Smooth alpha calculation
alpha = np.clip((dist - 6.0) / 20.0, 0.0, 1.0)

# Green/lime aperture triangle detection
is_lime = (arr[:, :, 1] > 160) & (arr[:, :, 2] < 120) & (dist > 30)

# Build Dark Logo (for light backgrounds: header, paper, open graph)
dark_arr = np.zeros_like(arr)
# Lime part
dark_arr[is_lime, 0] = arr[is_lime, 0]
dark_arr[is_lime, 1] = arr[is_lime, 1]
dark_arr[is_lime, 2] = arr[is_lime, 2]
dark_arr[is_lime, 3] = alpha[is_lime] * 255.0
# Dark part: #191B18
is_dark = (~is_lime) & (alpha > 0)
dark_arr[is_dark, 0] = 25
dark_arr[is_dark, 1] = 27
dark_arr[is_dark, 2] = 24
dark_arr[is_dark, 3] = alpha[is_dark] * 255.0

dark_im = Image.fromarray(dark_arr.astype(np.uint8), mode='RGBA')
full_bbox = dark_im.getbbox()
cropped_dark_full = dark_im.crop(full_bbox)
cropped_dark_full.save(os.path.join(out_dir, 'fagon-logo.png'), 'PNG')
cropped_dark_full.save(os.path.join(out_dir, 'fagon-logo.webp'), 'WEBP')

# Mark-only Dark
mark_arr = dark_arr[:366, :, :]
mark_im = Image.fromarray(mark_arr.astype(np.uint8), mode='RGBA')
mark_bbox = mark_im.getbbox()
cropped_dark_mark = mark_im.crop(mark_bbox)
cropped_dark_mark.save(os.path.join(out_dir, 'fagon-mark.png'), 'PNG')
cropped_dark_mark.save(os.path.join(out_dir, 'fagon-mark.webp'), 'WEBP')

# Build Light/White Logo (for dark backgrounds: footer, dark hero, contrast tiles)
white_arr = np.zeros_like(arr)
# Lime part stays luminous lime
white_arr[is_lime, 0] = arr[is_lime, 0]
white_arr[is_lime, 1] = arr[is_lime, 1]
white_arr[is_lime, 2] = arr[is_lime, 2]
white_arr[is_lime, 3] = alpha[is_lime] * 255.0
# White/Cream part: #F6F3EB
white_arr[is_dark, 0] = 246
white_arr[is_dark, 1] = 243
white_arr[is_dark, 2] = 235
white_arr[is_dark, 3] = alpha[is_dark] * 255.0

white_im = Image.fromarray(white_arr.astype(np.uint8), mode='RGBA')
cropped_white_full = white_im.crop(full_bbox)
cropped_white_full.save(os.path.join(out_dir, 'fagon-logo-white.png'), 'PNG')
cropped_white_full.save(os.path.join(out_dir, 'fagon-logo-white.webp'), 'WEBP')

# Mark-only White
white_mark_arr = white_arr[:366, :, :]
white_mark_im = Image.fromarray(white_mark_arr.astype(np.uint8), mode='RGBA')
cropped_white_mark = white_mark_im.crop(mark_bbox)
cropped_white_mark.save(os.path.join(out_dir, 'fagon-mark-white.png'), 'PNG')
cropped_white_mark.save(os.path.join(out_dir, 'fagon-mark-white.webp'), 'WEBP')

# Generate Favicon (64x64 square with rounded dark background #191B18 and white mark + lime accent)
favicon_size = 64
favicon_im = Image.new('RGBA', (favicon_size, favicon_size), (0, 0, 0, 0))

# Resize mark to fit comfortably inside 64x64 (e.g. 48x48)
mark_fit = cropped_white_mark.copy()
mark_fit.thumbnail((44, 44), Image.Resampling.LANCZOS)
offset_x = (favicon_size - mark_fit.width) // 2
offset_y = (favicon_size - mark_fit.height) // 2

# Draw rounded rect mask for background
from PIL import ImageDraw
bg_draw_im = Image.new('RGBA', (favicon_size, favicon_size), (0, 0, 0, 0))
draw = ImageDraw.Draw(bg_draw_im)
draw.rounded_rectangle([0, 0, favicon_size - 1, favicon_size - 1], radius=14, fill=(25, 27, 24, 255))
bg_draw_im.paste(mark_fit, (offset_x, offset_y), mark_fit)

bg_draw_im.save(os.path.join(public_dir, 'favicon.png'), 'PNG')

# Generate SVG favicon with embedded high-res base64 PNG
import io
buf = io.BytesIO()
bg_draw_im.save(buf, format='PNG')
b64_png = base64.b64encode(buf.getvalue()).decode('ascii')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <image href="data:image/png;base64,{b64_png}" width="64" height="64" />
</svg>
'''
with open(os.path.join(public_dir, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_content)

# Update og-image.svg with new logo mark
og_path = os.path.join(public_dir, 'og-image.svg')
if os.path.exists(og_path):
    with open(og_path, 'r', encoding='utf-8') as f:
        og_svg = f.read()
    old_text = '<text x="80" y="250" font-family="Georgia, serif" font-size="78" font-weight="700" fill="#191B18">Fagon Studio</text>'
    if old_text in og_svg:
        new_text = f'''  <rect x="80" y="180" width="80" height="80" rx="18" fill="#191B18" />
  <image href="data:image/png;base64,{b64_png}" x="88" y="188" width="64" height="64" />
  <text x="180" y="246" font-family="Georgia, serif" font-size="76" font-weight="700" fill="#191B18">Fagon Studio</text>'''
        og_svg = og_svg.replace(old_text, new_text)
        with open(og_path, 'w', encoding='utf-8') as f:
            f.write(og_svg)
        print('- og-image.svg updated')

print('Successfully generated all logo assets:')
print('- fagon-logo.png / webp')
print('- fagon-mark.png / webp')
print('- fagon-logo-white.png / webp')
print('- fagon-mark-white.png / webp')
print('- favicon.png & favicon.svg')
