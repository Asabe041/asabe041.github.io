function addToCart(service, cart) {

    var s1 = document.getElementById(cart);
    
    var servicePriceId;
    servicePriceId = service+"-price";
    var s2 = document.getElementById(servicePriceId)

    var s3 = document.getElementById('total');
    s3.innerHTML = s2.innerHTML;
    var p = document.createElement('p');

    var s = document.createElement('span');
    s.className= "price";
    s.innerHTML= s2.innerHTML;

    p.innerHTML = service;
    p.appendChild(s);
    s1.appendChild(p);
  

}