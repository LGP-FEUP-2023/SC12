import argparse
import qrcode
from PIL import Image


def generate_qrcode(args: str):
    join_court_request = f"h4pro://MEM4PRO/ID_PLACEHOLDER/join_court/{args.padel_company_id}/{args.padel_court_id}"
    qr = qrcode.QRCode(version=1, box_size=10, border=5, error_correction=qrcode.constants.ERROR_CORRECT_H)
    qr.add_data(join_court_request)
    qr.make(fit=True)


    icon = Image.open("icon_m.png").convert('RGB')
    img = qr.make_image(fill_color="black", back_color="white").convert('RGB')

    icon_size = min(img.size) // 4
    icon_resized = icon.resize((icon_size, icon_size), Image.Resampling.LANCZOS)
    icon_pos = ((img.size[0] - icon_size) // 2, (img.size[1] - icon_size) // 2)
    img.paste(icon_resized, icon_pos)

    img.save(f"qr_codes/{args.padel_company_id}-{args.padel_court_id}.png")


def get_arguments()-> str:
    """Gets command line arguments.
    """

    
    parser = argparse.ArgumentParser(description='Process some input.')
    parser.add_argument('--padel_company_id', type=str, help='The id of the padel company', required=True)
    parser.add_argument('--padel_court_id', type=str, help="The id of the padel company's court", required=True)


    # Parse the command line arguments
    args = parser.parse_args()

    return args
    


if __name__ == '__main__':
    args = get_arguments()
    generate_qrcode(args)