const products = [
  {id:1,name:"Amul Vanilla Magic",size:"1 L",price:190,cat:"classic",emoji:"🍦",art:"#f6e8bd"},
  {id:2,name:"Amul Chocolate",size:"1 L",price:200,cat:"chocolate",emoji:"🍫",art:"#70432f"},
  {id:3,name:"Amul Strawberry",size:"1 L",price:190,cat:"fruity",emoji:"🍓",art:"#f58fa0"},
  {id:4,name:"Amul Kesar Pista",size:"1 L",price:220,cat:"nutty",emoji:"🥜",art:"#d8e78c"},
  {id:5,name:"Amul Rajbhog",size:"1 L",price:220,cat:"nutty",emoji:"🌰",art:"#e5b84c"},
  {id:6,name:"Amul Chocobar",size:"70 ml",price:40,cat:"bars",emoji:"🍫",art:"#6d402b"},
  {id:7,name:"Amul Mango",size:"1 L",price:210,cat:"fruity",emoji:"🥭",art:"#ffc64a"},
  {id:8,name:"Amul Butterscotch",size:"1 L",price:210,cat:"classic",emoji:"🍯",art:"#d89a45"},
  {id:9,name:"Amul Kulfi",size:"1 L",price:230,cat:"kulfi",emoji:"🍧",art:"#efd5a4"},
  {id:10,name:"Amul Family Pack",size:"1 L",price:240,cat:"family",emoji:"👨‍👩‍👧",art:"#bcd9f5"},
  {id:11,name:"Amul Chocolate Cone",size:"120 ml",price:55,cat:"bars",emoji:"🍦",art:"#8b5537"},
  {id:12,name:"Amul Pista",size:"1 L",price:220,cat:"nutty",emoji:"🥜",art:"#b9d57e"}
];

let activeFilter="all", cart=JSON.parse(localStorage.getItem("pickneat-cart")||"[]");

const productsEl=document.getElementById("products"), resultCount=document.getElementById("resultCount");
function renderProducts(){
  const q=(document.getElementById("searchInput").value||"").trim().toLowerCase();
  const filtered=products.filter(p=>(activeFilter==="all"||p.cat===activeFilter) && (!q || `${p.name} ${p.cat}`.toLowerCase().includes(q)));
  resultCount.textContent=`${filtered.length} picks`;
  document.getElementById("emptyState").hidden=filtered.length!==0;
  productsEl.innerHTML=filtered.map(p=>`
    <article class="product">
      <div class="product-art" style="--art:${p.art}"><span>${p.emoji}</span></div>
      <h3>${p.name}</h3><p>${p.size}</p>
      <div class="price-row"><span class="price">₹${p.price}</span><button class="add" onclick="addToCart(${p.id})">🛒 Add to Pick</button></div>
    </article>`).join("");
}
function addToCart(id){
  const p=products.find(x=>x.id===id); const found=cart.find(x=>x.id===id);
  if(found) found.qty++; else cart.push({...p,qty:1});
  saveCart(); openCart();
}
function addCombo(name,price){
  const id="combo-"+name; const found=cart.find(x=>x.id===id);
  if(found) found.qty++; else cart.push({id,name,price:+price,size:"Combo",emoji:"🍨",qty:1});
  saveCart(); openCart();
}
function saveCart(){localStorage.setItem("pickneat-cart",JSON.stringify(cart));renderCart();}
function renderCart(){
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0), count=cart.reduce((s,x)=>s+x.qty,0);
  document.getElementById("cartCount").textContent=count;
  document.getElementById("cartTotal").textContent=`₹${total}`;
  document.getElementById("cartEmpty").style.display=cart.length?"none":"block";
  document.getElementById("checkoutBtn").disabled=!cart.length;
  document.getElementById("cartItems").innerHTML=cart.map((x,i)=>`
    <div class="cart-item"><div class="cart-icon">${x.emoji}</div>
      <div><h4>${x.name}</h4><small>₹${x.price} × ${x.qty}</small></div>
      <div class="qty"><button onclick="changeQty(${i},-1)">−</button><b>${x.qty}</b><button onclick="changeQty(${i},1)">+</button></div>
    </div>`).join("");
}
function changeQty(i,d){cart[i].qty+=d;if(cart[i].qty<=0)cart.splice(i,1);saveCart();}
function openCart(){document.getElementById("cartDrawer").classList.add("open");document.getElementById("cartDrawer").setAttribute("aria-hidden","false");document.getElementById("overlay").classList.add("show");}
function closeCart(){document.getElementById("cartDrawer").classList.remove("open");document.getElementById("cartDrawer").setAttribute("aria-hidden","true");document.getElementById("overlay").classList.remove("show");}
document.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".category").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeFilter=btn.dataset.filter;renderProducts();document.getElementById("ice-creams").scrollIntoView({behavior:"smooth"});}));
document.getElementById("searchInput").addEventListener("input",renderProducts);
document.getElementById("viewAll").addEventListener("click",()=>{activeFilter="all";document.querySelectorAll(".category").forEach(b=>b.classList.toggle("active",b.dataset.filter==="all"));document.getElementById("searchInput").value="";renderProducts();});
document.getElementById("cartButton").addEventListener("click",openCart);document.getElementById("closeCart").addEventListener("click",closeCart);document.getElementById("overlay").addEventListener("click",closeCart);
document.getElementById("menuButton").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.querySelectorAll(".combo-add").forEach(b=>b.addEventListener("click",()=>addCombo(b.dataset.name,b.dataset.price)));
document.getElementById("checkoutBtn").addEventListener("click",()=>{
  if(!cart.length)return;
  alert("Your Pick is ready. Next step: connect your Pick'N'Eat WhatsApp number to complete ordering.");
});
document.getElementById("whatsappBtn").addEventListener("click",()=>alert("Send me your Pick'N'Eat WhatsApp number and I’ll connect this button to it."));
renderProducts();renderCart();
