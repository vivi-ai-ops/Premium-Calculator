
    function generateTable() {
      const basePremium = parseFloat(document.getElementById('basePremium').value);
      const ages = document.getElementById('ages').value.split(',').map(a => parseInt(a.trim()));
      const risks = document.getElementById('risks').value.split(',').map(r => parseFloat(r.trim()));

      const tbody = document.querySelector('#resultTable tbody');
      tbody.innerHTML = '';

      ages.forEach(age => {
        risks.forEach(riskScore => {
          if (age >= 18 && riskScore >= 1) {
            const ageFactor = age < 30 ? 1 : age < 50 ? 1.2 : 1.5;
            const premium = +(basePremium * ageFactor * riskScore).toFixed(2);

            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${age}</td>
              <td>${riskScore}</td>
              <td>${premium}</td>
            `;
            tbody.appendChild(row);
          }
        });
      });
    }
  