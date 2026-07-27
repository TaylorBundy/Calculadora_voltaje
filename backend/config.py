import os


BASE_DIR = os.path.dirname(
    os.path.abspath(__file__)
)


class Config:

    SQLALCHEMY_DATABASE_URI = (
        "sqlite:///" +
        os.path.join(
            BASE_DIR,
            "solarpatagonia.db"
        )
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    UPLOAD_FOLDER = "uploads/fotos"