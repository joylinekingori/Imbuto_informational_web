
const navBar = document.querySelector('.navigation-bar');


navBar.style.display = 'flex';
navBar.style.alignItems = 'center'; 
navBar.style.justifyContent = 'flex-start'; 
navBar.style.backgroundColor = '#13380B'; 
navBar.style.padding = '10px';
navBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';

navBar.style.position = 'fixed'; 
navBar.style.top = '0'; 
navBar.style.left = '0'; 
navBar.style.width = '100%'; 
navBar.style.zIndex = '1000'; 


const logoSpace = document.createElement('div');
logoSpace.style.width = '100px'; 
logoSpace.style.display = 'flex'; 
logoSpace.style.alignItems = 'center'; 
navBar.appendChild(logoSpace);


const logo = document.createElement('img');
logo.src = 'image/image.png'; 
logo.alt = 'Logo';
logo.style.width = '100%'; 
logo.style.height = 'auto'; 


logoSpace.appendChild(logo);


const linkContainer = document.createElement('div');
linkContainer.style.display = 'flex'; 
linkContainer.style.alignItems = 'center'; 
linkContainer.style.marginLeft = '8cm'; 
navBar.appendChild(linkContainer);


const links = navBar.querySelectorAll('a');
links.forEach(link => {
    link.style.color = 'white'; 
    link.style.textDecoration = 'none'; 
    link.style.padding = '10px 15px'; 
    link.style.borderRadius = '5px'; 
    link.style.transition = 'background-color 0.3s'; 
    link.style.fontSize = '20px';
});


links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'orange'; 
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; 
    });
});


for (let i = 0; i < links.length - 1; i++) {
    links[i].style.marginRight = '2cm'; 
}

links.forEach(link => {
    linkContainer.appendChild(link);
});

const joinButton = document.createElement('button');
joinButton.textContent = 'Join Now'; 
joinButton.addEventListener('click', function(){
    window.location.href = "index.html"
})
joinButton.style.backgroundColor = 'orange'; 
joinButton.style.color = 'white'; 
joinButton.style.border = 'none'; 
joinButton.style.padding = '10px 20px'; 
joinButton.style.borderRadius = '5px'; 
joinButton.style.cursor = 'pointer'; 
joinButton.style.fontSize = '16px'; 
joinButton.style.marginLeft = '4cm'; 


navBar.appendChild(joinButton);


const homepage = document.querySelector('.homepage');

homepage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(21, 22, 21, 0.6)),url('image/original-cow.png')"; 
homepage.style.backgroundSize = 'cover'; 
homepage.style.backgroundPosition = 'center'; 
homepage.style.color = 'white'; 
homepage.style.padding = '50px 20px'; 
homepage.style.position = 'relative';
homepage.style.height= '80vh';


const playStoreButton = document.getElementById('play-store');


playStoreButton.parentElement.style.textDecoration = 'none'; 


playStoreButton.style.backgroundColor = 'orange'; 
playStoreButton.style.color = 'white'; 
playStoreButton.style.border = 'none'; 
playStoreButton.style.padding = '10px 20px'; 
playStoreButton.style.borderRadius = '10px'; 
playStoreButton.style.cursor = 'pointer'; 
playStoreButton.style.fontSize = '16px'; 
playStoreButton.style.display = 'flex'; 
playStoreButton.style.alignItems = 'center'; 
playStoreButton.style.justifyContent = 'center'; 
playStoreButton.style.marginTop = '1cm';
playStoreButton.style.marginLeft = '1cm';


const playStoreIcon = document.createElement('img');
playStoreIcon.src = 'image/playstore.png'; 
playStoreIcon.alt = 'Play Store Icon';
playStoreIcon.style.width = '20px'; 
playStoreIcon.style.height = '20px'; 
playStoreIcon.style.marginRight = '8px'; 


playStoreButton.prepend(playStoreIcon);


// our services


const imbutoServices = document.querySelector('.imbuto-services');


imbutoServices.style.backgroundColor = '#D9D9D9';
imbutoServices.style.padding = '20px';
imbutoServices.style.borderRadius = '0';
imbutoServices.style.height = '60vh'; 


const heading = imbutoServices.querySelector('h2');
heading.style.textAlign = 'center'; 
heading.style.marginBottom = '70px'; 
heading.style.fontSize = '50px';
heading.style.color='#13380B';

const serviceContainer = document.createElement('div');
serviceContainer.style.display = 'flex'; 
serviceContainer.style.gap = '3cm'; 
serviceContainer.style.marginTop = '20px'; 
serviceContainer.style.marginLeft = '4cm';


imbutoServices.appendChild(serviceContainer);

const serviceDivs = imbutoServices.querySelectorAll('.specific-services');

serviceDivs.forEach(serviceDiv => {
    const serviceBox = document.createElement('div');
    serviceBox.style.backgroundColor = '#D9D9D9'; 
    serviceBox.style.borderRadius = '8px'; 
    serviceBox.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.1)'; 
    serviceBox.style.padding = '15px'; 
    serviceBox.style.width = '10cm'; 
    serviceBox.style.height = '8cm'; 


    const title = serviceDiv.querySelector('h3').cloneNode(true);
    const description = serviceDiv.querySelector('p').cloneNode(true);

    title.style.color = '#13380B'; 
    title.style.textAlign = 'center'; 
    title.style.marginTop='30px';

    description.style.color = 'black'; 
    description.style.textAlign = 'center'; 
    description.style.marginTop = '60px'; 
    
    serviceBox.appendChild(title);
    serviceBox.appendChild(description);

    serviceContainer.appendChild(serviceBox);
});


serviceDivs.forEach(serviceDiv => {
    serviceDiv.remove();
});

// About us

const aboutImbuto = document.querySelector('.about-imbuto');

aboutImbuto.style.backgroundColor = 'orange'; 
aboutImbuto.style.padding = '20px'; 
aboutImbuto.style.textAlign = 'center'; 


const aboutHeading = aboutImbuto.querySelector('h2');
aboutHeading.style.color = 'black'; 
aboutHeading.style.marginBottom = '20px'; 
aboutHeading.style.fontSize='50px';


const aboutParagraph = aboutImbuto.querySelector('p');
aboutParagraph.style.color = '#13380B'; 
aboutParagraph.style.fontSize='20px';

const milkImage = document.createElement('img');
milkImage.src = 'image/milk.png'; 
milkImage.alt = 'Splashing Milk';
milkImage.style.width = '20%'; 
milkImage.style.height='5cm';

aboutImbuto.appendChild(milkImage);





// Empowering 


const discoverButton = statistics.querySelector('button');

discoverButton.style.backgroundColor = '#268C13'; 
discoverButton.style.color = 'white'; 
discoverButton.style.border = 'none';
discoverButton.style.padding = '10px 20px'; 
discoverButton.style.borderRadius = '5px';
discoverButton.style.cursor = 'pointer'; 
discoverButton.style.fontSize = '16px'; 
discoverButton.style.marginTop = '4cm';
discoverButton.style.marginLeft='23cm'

statistics.appendChild(discoverButton);

//Our contact information
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('form-feedback');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            feedback.style.display = 'block';
            form.reset();
            setTimeout(() => {
                feedback.style.display = 'none';
            }, 2000);
        });
    }
});









