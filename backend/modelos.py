from database import db


class Cliente(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    nombre = db.Column(
        db.String(100),
        nullable=False
    )

    telefono = db.Column(
        db.String(50)
    )

    email = db.Column(
        db.String(100)
    )

    localidad = db.Column(
        db.String(100)
    )

    direccion = db.Column(
        db.String(200)
    )

    observaciones = db.Column(
        db.Text
    )


    def json(self):

        return {

            "id": self.id,
            "nombre": self.nombre,
            "telefono": self.telefono,
            "email": self.email,
            "localidad": self.localidad,
            "direccion": self.direccion,
            "observaciones": self.observaciones

        }