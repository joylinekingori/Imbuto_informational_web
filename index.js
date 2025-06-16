// Select the navigation bar
const navBar = document.querySelector('.navigation-bar');

// Style the navigation bar
navBar.style.display = 'flex';
navBar.style.alignItems = 'center'; // Align items vertically
navBar.style.justifyContent = 'flex-start'; // Align items to the left
navBar.style.backgroundColor = '#13380B'; // Green background
navBar.style.padding = '10px';
navBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';

// Add space for the logo
const logoSpace = document.createElement('div');
logoSpace.style.width = '150px'; // Adjust width as needed
logoSpace.style.display = 'flex'; // Use flexbox for alignment
logoSpace.style.alignItems = 'center'; // Center logo vertically
navBar.appendChild(logoSpace);

// Create and style the logo image
const logo = document.createElement('img');
logo.src = 'image/image.png'; // Replace with the actual path to your logo
logo.alt = 'Logo';
logo.style.width = '100%'; // Set width to fill the logo space
logo.style.height = 'auto'; // Maintain aspect ratio

// Append the logo to the logo space
logoSpace.appendChild(logo);

// Create a container for the links
const linkContainer = document.createElement('div');
linkContainer.style.display = 'flex'; // Use flexbox for links
linkContainer.style.alignItems = 'center'; // Align links vertically
linkContainer.style.marginLeft = '8cm'; // Adjust margin to reduce space between logo and first link
navBar.appendChild(linkContainer);

// Style the links
const links = navBar.querySelectorAll('a');
links.forEach(link => {
    link.style.color = 'white'; // White text
    link.style.textDecoration = 'none'; // Remove underline
    link.style.padding = '10px 15px'; // Padding around links
    link.style.borderRadius = '5px'; // Rounded corners
    link.style.transition = 'background-color 0.3s'; // Smooth transition
    link.style.fontSize='20px';
});

// Add hover effect
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'orange'; // Darker green on hover
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = ''; // Reset background on mouse out
    });
});

// Adjust spacing between links
for (let i = 0; i < links.length - 1; i++) {
    links[i].style.marginRight = '2cm'; // Space between links
}

// Append links to the link container
links.forEach(link => {
    linkContainer.appendChild(link);
});

// Create and style the "Join Now" button
const joinButton = document.createElement('button');
joinButton.textContent = 'Join Now'; // Button text
joinButton.style.backgroundColor = 'orange'; // Button background color
joinButton.style.color = 'white'; // Button text color
joinButton.style.border = 'none'; // Remove border
joinButton.style.padding = '10px 20px'; // Padding for the button
joinButton.style.borderRadius = '5px'; // Rounded corners
joinButton.style.cursor = 'pointer'; // Pointer cursor on hover
joinButton.style.fontSize = '16px'; // Font size
joinButton.style.marginLeft = 'auto'; // Push the button to the far right

// Append the "Join Now" button to the navigation bar
navBar.appendChild(joinButton);
// homepage 

const homepage = document.querySelector('.homepage');

// Style the homepage
homepage.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('image/cowr.jpg')"; // Replace with your image path
homepage.style.backgroundSize = 'cover'; // Cover the entire area
homepage.style.backgroundPosition = 'center'; // Center the image
homepage.style.color = 'white'; // Text color
homepage.style.textAlign = 'center'; // Center the text
homepage.style.padding = '50px 20px'; // Add padding
homepage.style.position = 'relative'; // Position relative for button placement
homepage.style.height= '80vh'


// Select the play store button
const playStoreButton = document.getElementById('play-store');

// Style the play store button
playStoreButton.style.backgroundColor = 'orange'; // Button color
playStoreButton.style.color = 'white'; // Text color
playStoreButton.style.border = 'none'; // Remove border
playStoreButton.style.padding = '10px 20px'; // Padding for the button
playStoreButton.style.borderRadius = '10px'; // Rounded corners
playStoreButton.style.cursor = 'pointer'; // Pointer cursor on hover
playStoreButton.style.fontSize = '16px'; // Font size
playStoreButton.style.display = 'flex'; // Flexbox for icon and text
playStoreButton.style.alignItems = 'center'; // Center items vertically
playStoreButton.style.justifyContent = 'center'; // Center items horizontally
playStoreButton.style.marginTop = '8cm';
playStoreButton.style.marginLeft = '10cm';


// Create and style the Play Store icon
const playStoreIcon = document.createElement('img');
playStoreIcon.src = 'image/playstore.png'; // Replace with your icon path
playStoreIcon.alt = 'Play Store Icon';
playStoreIcon.style.width = '20px'; // Icon width
playStoreIcon.style.height = '20px'; // Icon height
playStoreIcon.style.marginRight = '8px'; // Space between icon and text

// Append the icon to the button
playStoreButton.prepend(playStoreIcon);



// our services

// Select the Imbuto services container
const imbutoServices = document.querySelector('.imbuto-services');

// Style the Imbuto services container
imbutoServices.style.backgroundColor = '#D9D9D9'; // Background color
imbutoServices.style.padding = '20px'; // Padding around the container
imbutoServices.style.borderRadius = '0'; // No border radius for the container
imbutoServices.style.height = '60vh'; // Set height

// Select the heading and style it
const heading = imbutoServices.querySelector('h2');
heading.style.textAlign = 'center'; // Center the heading
heading.style.marginBottom = '70px'; // Space between heading and boxes
heading.style.fontSize = '50px';
heading.style.color='#13380B';
// Create a div to hold the service boxes
const serviceContainer = document.createElement('div');
serviceContainer.style.display = 'flex'; // Use flexbox for layout
serviceContainer.style.gap = '3cm'; // Space between boxes
serviceContainer.style.marginTop = '20px'; // Space above the boxes
serviceContainer.style.marginLeft = '4cm';

// Append the service container to the Imbuto services container
imbutoServices.appendChild(serviceContainer);

// Select all service divs within the Imbuto services container
const serviceDivs = imbutoServices.querySelectorAll('.specific-services'); // Select only the service divs

// Style each service div and append to the service container
serviceDivs.forEach(serviceDiv => {
    const serviceBox = document.createElement('div'); // Create a new div for each service
    serviceBox.style.backgroundColor = '#D9D9D9'; // Background color for each service box
    serviceBox.style.borderRadius = '8px'; // Small border radius for each box
    serviceBox.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.1)'; // Box shadow for each service box
    serviceBox.style.padding = '15px'; // Padding inside each service box
    serviceBox.style.width = '10cm'; // Set width for each box
    serviceBox.style.height = '8cm'; // Set height for each box

    // Clone the title and description from the original service div
    const title = serviceDiv.querySelector('h3').cloneNode(true);
    const description = serviceDiv.querySelector('p').cloneNode(true);

    // Style the title and description
    title.style.color = '#13380B'; // Style for the title
    title.style.textAlign = 'center'; // Center the title
    title.style.marginTop='30px';

    description.style.color = 'black'; // Style for the description
    description.style.textAlign = 'center'; // Center the description
    description.style.marginTop = '60px'; // Add space between title and description

    // Append the title and description to the new service box
    serviceBox.appendChild(title);
    serviceBox.appendChild(description);

    // Append each service box to the service container
    serviceContainer.appendChild(serviceBox);
});

// Remove the original service divs to avoid duplication
serviceDivs.forEach(serviceDiv => {
    serviceDiv.remove();
});


// About us




// Select the about-imbuto container
const aboutImbuto = document.querySelector('.about-imbuto');

// Style the about-imbuto container
aboutImbuto.style.backgroundColor = 'orange'; // Background color
aboutImbuto.style.padding = '20px'; // Padding around the container
// aboutImbuto.style.borderRadius = '8px'; // Optional: Add border radius
aboutImbuto.style.textAlign = 'center'; // Center the text

// Style the heading
const aboutHeading = aboutImbuto.querySelector('h2');
aboutHeading.style.color = 'black'; // Heading color
aboutHeading.style.marginBottom = '20px'; // Space below the heading
aboutHeading.style.fontSize='50px';

// Style the paragraph
const aboutParagraph = aboutImbuto.querySelector('p');
aboutParagraph.style.color = '#13380B'; // Green color for the paragraph
aboutParagraph.style.fontSize='20px'
// aboutParagraph.style.marginBottom = '20px'; // Space below the paragraph

// Create an image element for the splashing milk
const milkImage = document.createElement('img');
milkImage.src = 'image/milk.png'; // Replace with the actual path to your image
milkImage.alt = 'Splashing Milk';
milkImage.style.width = '20%'; // Set width to 100% of the container
milkImage.style.height='5cm';
// milkImage.style.borderRadius = '8px'; // Optional: Add border radius to the image
// milkImage.style.marginTop = '10px'; // Space above the image

// Append the image to the about-imbuto container
aboutImbuto.appendChild(milkImage);





// Empowering 



// Style the button
const discoverButton = statistics.querySelector('button');

discoverButton.style.backgroundColor = '#268C13'; // Green button color
discoverButton.style.color = 'white'; // Text color
discoverButton.style.border = 'none'; // Remove border
discoverButton.style.padding = '10px 20px'; // Padding for the button
discoverButton.style.borderRadius = '5px'; // Rounded corners
discoverButton.style.cursor = 'pointer'; // Pointer cursor on hover
discoverButton.style.fontSize = '16px'; // Font size
discoverButton.style.marginTop = '4cm'; // Space above the button
discoverButton.style.marginLeft='23cm'


// Append the button after the inner divs
statistics.appendChild(discoverButton);














// -Jeniffer and Membre to finish on the UI testcases
// -Membre is doing personas 
// -I will do python documentation 