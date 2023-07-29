//Clase: ProductManager - que gestione un conjunto de productos
//Constructor: elemento "products" (arreglo vacio)
//Propiedades: title, description, price, thumbnail(ruta de imagen), code(codigo identificador), stock

//metodo: addProduct - que agregue un producto al arreglo inicial (validar q no se repita el campo code y que todos los campos sean obligatorios)
//al agregarlo debe crearse con un id autoincrementable
//metodo: getProducts - debe devolver el arreglo con todos los productos creados hasta el momento
//metodo: getProductById - debe buscar en el arreglo el producto que coincida con el id (en caso de no coincidir ningun id, mostrar en la consola un error "Not fund")

class ProductManager {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        const prod = this.products.find(prod => prod.code === product.code)
        if (prod) {
            console.log("Producto repetido")
        } else {
            this.products.push(product)
        }
    };
    getProducts() {
        console.log(this.products)
    };
    getProductById(id) {
        const prod = this.products.find(prod => prod.id === id)
        if (prod) {
            console.log(prod)
        } else {
            console.log("Producto no encontrado")
        }
    };
}

class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
        this.id = Product.incrementariId()
    }
    static incrementariId() {
        if (this.idIncremnt) {
            this.idIncremnt++
        } else {
            this.idIncremnt = 1
        }
        return this.idIncremnt
    }
}

//Productos
const product1 = new Product("Manzana", "Roja", 150, "MANR", 50, [])
const product2 = new Product("Banana", "Ecuador", 100, "BANE", 110, [])
const product3 = new Product("Kiwi", "Peludo", 300, "KIWP", 25, [])
const product4 = new Product("Manzana", "Roja", 150, "MANR", 50, [])

const productManager = new ProductManager()

productManager.addProduct(product1)
productManager.addProduct(product2)
productManager.addProduct(product3)
productManager.addProduct(product4)

productManager.getProducts()

productManager.getProductById(5)