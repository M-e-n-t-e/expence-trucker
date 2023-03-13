window.addEventListener('load', () => {

    const done = document.querySelector('.submit-btn');
    // const table_header = document.querySelector('.table-header');


    done.addEventListener('click', (e) => {

        e.preventDefault();
        
        const expence_input = document.querySelector('.title-of-expence').value;
        const date_input = document.querySelector('.date-of-expence').value;
        const money_input = document.querySelector('.expence-amount').value;
        
        if(!expence_input){
            alert('Please write down your expences first');
            return;
        }
        if(!date_input){
            alert('Please complete the form first');
            return;
        }
        if(!money_input){
            alert('Please complete the form first');
            return;
        }


        const result_table = document.querySelector('.result-table')

        const content = document.createElement('tr')
        content.classList.add('table-content')

        const expence = document.createElement('td')
        expence.classList.add('expence')

        expence.append(expence_input);


        const date = document.createElement('td')
        date.classList.add('date')


        date.append(date_input)

        const money = document.createElement('td')
        money.classList.add('money')
        money.append('$' + money_input)

        const check_holder = document.createElement('td')
        const check = document.createElement('i')
        check.classList.add('fa', 'fa-x')

        content.appendChild(expence)
        content.appendChild(date)
        content.appendChild(money)
        check_holder.appendChild(check)
        content.appendChild(check_holder)

        // table.appendChild(table_header);
        result_table.appendChild(content);

        document.querySelector('.title-of-expence').value = '';
        document.querySelector('.date-of-expence').value = '';
        document.querySelector('.expence-amount').value = '';
        
        check.addEventListener('click', () => {
            result_table.removeChild(content)
        })


    })
})