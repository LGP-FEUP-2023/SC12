import argparse
import qrcode


def generate_qrcode(args: str):
    join_court_request = f"https://MEM4PRO/ID_PLACEHOLDER/join_court/{args.padel_company_id}/{args.padel_court_id}"
    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(join_court_request)
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(f"{args.padel_company_id}-{args.padel_court_id}.png")


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