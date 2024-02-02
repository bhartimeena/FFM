document.getElementById("visitorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var formData = new FormData(this);
    var visitorData = {};
    formData.forEach(function(value, key){
        visitorData[key] = value;
    });
    var visitors = JSON.parse(localStorage.getItem("visitors")) || [];
    visitors.push(visitorData);
    localStorage.setItem("visitors", JSON.stringify(visitors));
    document.getElementById("visitorForm").reset();
    alert("Thank you for Your Message See You Soon!");
});