constform = document.getElementById('product-form')
constform = document.getElementById('product-list')
const form = document.getElementById('name')
constform = document.getElementById('price')
constform = document.getElementById('description')
constform = document.getElementById('product-id')

//load product on losd page
form.addEventListener('DOMcontaintload',loadproduct)
form.addEventListener('submit',function(e){
    e.preventDefault();
    constid = idinput.value; 
    conatname = nameinput.value;
    constprice = priceinput.value;
    constdescription = description.value;

    constproduct = {id,name,price,description};
    saveproduct(product);
    form.reset ();
    loadproducts();
;});

function saveproduct(product) {
    let product = getproducts ();
    const index = products.findindex(p =>p.id ===product.id);

    if (index > -1){
        products[index] =products;
    }else {
        productpush(product);
    }
    lacalstorage.setitem('products',JSONstringify('products'))
}
functionloadproducts(){
    constproduct = getproducts();
    productlist.inerhtml = '';
    
    product.foreach(product =>{
        const li = document.childElement('li');
        li.inerhtml =
        <Storang>$product.name</Storang> - $${product-price}
        $ {product.description}
        <button oncilck ="editproduct"('$productid');
        <button onclick =    "deleteproduct"('$productid');
        productlist.appendchild(li){

        }
    })
}
functioneditproduct(id){
    constproduct = getproducts().find(p =. p.id === id);
    idinput.value = product.id;
    nameinput.value = product.name;
    priceinput.value = product.price;
    description.value = product.description;
}

functiondeletproduct(id){
    let products = getproducts().filter
    localStorage.setItem('products',JSONstringify(products));
    loadproduct();
}
functiongetproducts(){
    return JSON.parse(localStorage.getItem('products'))[];
}