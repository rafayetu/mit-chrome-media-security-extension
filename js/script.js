function setToast(icon, header, body){
    var toast = $("#msgToast");
    toast.find(".toast-header").find("strong").first().html(
        `<i class="fa fa-${icon}"></i>&nbsp; ${header}`);
    toast.find(".toast-body").find("div").first().html(body);
    toast.toast({ delay: 3000 });
    toast.toast('show');
}


$(document).ready(function(){
    // setToast;
    
    $("#btnStart").click(function(){
        

    }); 
});