const ApiKey = (props) => {
  const viewEl = document.createElement("div");

  const viewApiKey = `
<div class='view-api-key'>
<div class='form-api-key'>
<h1>
API Key
</h1>
<div class='body-api-key'>
<p>
Introduce aquí tu API Key
</p>
<input class= 'input-api-key'/>
</div>
 <button id='button-api-key' class="button-api-key">INGRESAR</button>
</div> 
</div>
   
`;

  viewEl.innerHTML = viewApiKey;
  const buttonApiKey = viewEl.querySelector("#button-api-key");
  buttonApiKey.addEventListener("click", function () {
    alert("holax");
  });

  return viewEl;
};

export default ApiKey;
