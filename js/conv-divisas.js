async function conversorDivisas(num) {

    const response = await fetch('https://cdn.dinero.today/api/ecb.json');
    const data = await response.json();
    const moneda = await data.rates.EUR;
    const moneda2 = await data.rates.JPY;
    const moneda3 = await data.rates;

    const optionOrig = document.getElementById('div-orig');
    const ejemplo = document.getElementById('origen');
    // let bl = ""


    if (!isNaN(num)) {
      try {
        
        for (ejem of optionOrig) {

          const ej = document.createElement('option');
          ejem.textContent = "USD"
          const ej2 = document.createElement('option');
          ej2.textContent = "JPY"
          const ej3 = document.createElement('option');


          // ej.textContent = moneda3
          
        }
        const cantidadDolares = await num * moneda;
        const cantidadJPY = await num * moneda2;

  
        console.log(`Resultado: ${num} Euros son ${cantidadDolares.toFixed(2)} Dólares. el jpy ${cantidadJPY}`);
      } catch (error) {
        console.error('Error al obtener la tasa de conversión:', error);
        alert('Hubo un error al obtener la tasa de conversión. Inténtelo nuevamente más tarde.');
      }
    } else {
      alert('Por favor, ingrese una cantidad numérica válida en euros.');
    }
    
}

// conversorDivisas();
