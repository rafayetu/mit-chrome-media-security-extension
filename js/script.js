function setToast(icon, header, body, type){
    var toast = $("#msgToast");
    toast.find(".toast-header").find("strong").first().html(
        `<i class="fa fa-${icon}"></i>&nbsp; ${header} !!!`);
    
    toast.find(".toast-body").find("div").first().html(body);
    toast.removeClass().addClass(`toast toast-${type}`);
    
    toast.find(".toast-header").removeClass().addClass(
        `toast-header bg-${type} text-white`)
    
    toast.toast({ delay: 5000 });
    toast.toast('show');
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

$(document).ready(function(){
    // setToast;
    
    $("#btnStart").click(function(){
        // setToast("video-camera", "Recording Started", 
        // "Media recording started successfully.", "success");
    }); 
});