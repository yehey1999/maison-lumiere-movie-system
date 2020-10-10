$(document).ready(function() {
    $('.data-table').DataTable({
        dom: 'Bfrtip',
        //export buttons
        buttons: ['copy', 'excel', 'csv', 'pdf'],

        //show entries dropdown
        lengthMenu: [[5, 10, 20, 50, 100, -1], [5, 10, 20, 50, 100, "All"]],

        //search bar
        searching: true,

        //formatting
        dom: '<<"row"<"col-sm-4"l><"col-sm-4"B><"col-sm-4"f>> rt <"float-left"i> <"float-right"p>>',

        //pagination
        pagingType: 'full_numbers',
        
        //fixedHeader: true,
        aoColumnDefs: [{
            'bSortable': false,
            'aTargets': [-1]
        }]
    });

    let table = $('.data-table').DataTable();
    
    // Add event listeners to the two range filtering inputs
    $('#min-date').keyup( function() { table.draw(); } );
    $('#max-date').keyup( function() { table.draw(); } );

    $('#min-date').change( function() { table.draw(); } );
    $('#max-date').change( function() { table.draw(); } );

    $('#refresh-btn').click( () => {
        $('#min-date').val("");
        $('#max-date').val("");

        table.draw();
    });

    $.fn.dataTableExt.afnFiltering.push(
        ( settings, data, dataIndex ) => {
            let minDate = $('#min-date').val();
            let maxDate = $('#max-date').val();
            let date = data[0].trim();
            
            if (minDate === '' || maxDate === '' )
                return true;

            if (Date.parse(date) >= Date.parse(minDate) && Date.parse(date) <= Date.parse(maxDate))
                return true;
                
            else 
                return false;
        }
    );
});
