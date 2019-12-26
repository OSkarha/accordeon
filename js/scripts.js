$(document).ready (()=> {

    let $collapse = $('.accordion__collapse'),
        $toggler = $('.accordion__toggler');

        $collapse.hide();
        $collapse.first()
                 .slideDown();
        
        $toggler.first().addClass('active');
    
        $toggler.on('click', function(e) {
        e.preventDefault();

        let $current = $(this).next();

        if ($(this).hasClass('active')){
            $current.slideUp()
            $(this).removeClass('active');
        } else {
            $current.slideDown()
            $(this).addClass('active');
        }

        $collapse.not($current).slideUp().removeClass('active');
        
    })
})      