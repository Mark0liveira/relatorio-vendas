
// Traz o relatório para tela
$( "#first, #third" ).click(function(){
    $('.panel-default').css("display", "block");
        $( ".relatorio" ).remove();
        $.getJSON( "../data/relatorio.json", function( data ) {
            var items = [];

            
                var relatorio = $.each( data, function( key, val ) {
                    $( `    <tr class="relatorio">
                                <td>${val.index}</td>
                                <td>${val.month}</td>
                                <td>${val.total}</td>
                            </tr>`, {
                        html: items.join( "" )
                    }).appendTo( "table" );
                });
        
        });
});

$( "#second" ).click(function(){
    $('.panel-default').css("display", "none");
});