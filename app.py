from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db
from modelos import Cliente


app = Flask(__name__)

CORS(app)


app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///clientes.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


db.init_app(app)



with app.app_context():

    db.create_all()



# -----------------------
# OBTENER CLIENTES
# -----------------------

@app.route("/clientes", methods=["GET"])
def obtener_clientes():

    clientes = Cliente.query.all()


    return jsonify(
        [
            c.json()
            for c in clientes
        ]
    )



# -----------------------
# GUARDAR CLIENTE
# -----------------------

@app.route("/clientes", methods=["POST"])
def guardar_cliente():

    datos = request.json


    cliente = Cliente(

        nombre=datos.get("nombre"),

        telefono=datos.get("telefono"),

        email=datos.get("email"),

        localidad=datos.get("localidad"),

        direccion=datos.get("direccion"),

        observaciones=datos.get("observaciones")

    )


    db.session.add(cliente)

    db.session.commit()


    return jsonify({

        "mensaje":"Cliente guardado",

        "cliente":cliente.json()

    }),201





# -----------------------
# ELIMINAR CLIENTE
# -----------------------

@app.route(
"/clientes/<int:id>",
methods=["DELETE"]
)

def eliminar_cliente(id):

    cliente = Cliente.query.get(id)


    if not cliente:

        return jsonify(
            {
             "error":"Cliente inexistente"
            }
        ),404



    db.session.delete(cliente)

    db.session.commit()


    return jsonify(
        {
        "mensaje":"Cliente eliminado"
        }
    )





if __name__=="__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )