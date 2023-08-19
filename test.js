let total=0;
function handleClickBtn(target){
  const selectedItemContainer=document.getElementById('selected-items')
  const itemName=target.parentNode.childNodes[1].innerText;
  const li= document.createElement('li');
  li.innerText=itemName;
  selectedItemContainer.appendChild(li);

  const price =target.parentNode.childNodes[5].innerText.split(' ')[1];

  total= parseInt(total)+ parseInt(price);
  document.getElementById('total').innerText=total;

  const discount =0.2*total;
  document.getElementById('discount').innerText=discount;

  const GTotal= total-discount;
  document.getElementById('GTotal').innerText=GTotal;
}