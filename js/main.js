let siteName = document.getElementById("siteName");
let siteUrl = document.getElementById("siteUrl");
let addUrl = document.getElementById("addUrl");
let inputs = document.getElementsByClassName("form-control");

let sites;

// intial sites
if (localStorage.getItem("siteList") == null) 
{
    sites = [];
} 
else 
{
    sites = JSON.parse(localStorage.getItem("siteList"));
    displaySites();
}
// add new site
function addSite() 
{
    let site = {
        name: siteName.value,
        url: siteUrl.value,
    };
    if(siteName.value == "")
    {
        al1 =document.getElementById("al1");
        al1.classList.remove("d-none");
    }
    if(siteUrl.value == "")
    {
        al2 =document.getElementById("al2");
        al2.classList.remove("d-none");
    }
    else{
        sites.push(site);
        localStorage.setItem("siteList", JSON.stringify(sites));
        al1.classList.add("d-none");
        al2.classList.add("d-none");
        clear();
    }
}

//display sites
function displaySites(){
    let data ="";
    for(var i=0 ; i<sites.length ; i++)
    {
        data+=
        `
        <tr>
        <td>${sites[i].name}</td>
        <td class="d-flex flex-row-reverse">
        <button onclick="deleteSite(${i})" class="btn btn-danger border-0 rounded mx-3">Delete</button>
        <a  href="${sites[i].url}" target="_blank" class="btn btn-info rounded mx-3" >Vist</a>
        </td>
        </tr>
        `
    }  
    document.getElementById("siteList").innerHTML = data;
}

//clear form
function clear()
{
    for(var i=0 ; i< inputs.length ; i++)
    {
        inputs[i].value = "";
    }
}

//delete Site
function deleteSite(index){
    sites.splice(index,1);
    displaySites();
    localStorage.setItem("siteList",JSON.stringify(sites));
}

//visit Site()
function visitSite(){

}
addUrl.onclick = function () 
{   
    addSite();
    displaySites();
};
