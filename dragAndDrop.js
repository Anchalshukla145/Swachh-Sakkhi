function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(document.getElementById(data).getAttribute("id"));
    if(document.getElementById(data).getAttribute("id") == "drag1"){
        document.querySelector(".verdict").innerHTML = "Participate in Local Clean-Up Drives: Encourage users to get involved in or organize local clean-up events. This could be a monthly or quarterly activity where community members come together to pick up litter in their neighborhoods or along highways. Creating a platform on your website where users can find or organize these events could boost participation.";
    }
    else if(document.getElementById(data).getAttribute("id") == "drag2"){
        document.querySelector(".verdict").innerHTML = "Use Swachh AI for Smart Reporting: Empower users with a personalized AI chatbot to report garbage hotspots, illegal dumping, or areas needing attention. Through your website, users can quickly submit reports or access relevant information and features. This ensures swift responses from local authorities or community clean-up teams, making waste management more efficient and proactive.";
        
    }
    else if(document.getElementById(data).getAttribute("id") == "drag3"){
        document.querySelector(".verdict").innerHTML = " Join our initiative to protect the environment and earn eco coins while you do it! If you report an incident involving improper waste disposal or a found dead animal using our AI-powered cameras, you’ll be rewarded with eco coins based on the significance of the report.Redeem for Discounts: Use your eco coins to receive discounts on grocery products at local markets, making it easier to shop sustainably.";
        
    }
    
}