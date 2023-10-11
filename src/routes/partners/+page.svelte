import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  const query = gql`
    query MyQuery {
      partners(where: {}) {
        image {
          imagePartners(first: 12)
        }
      }
    }
  `;

  // Execute the GraphQL query and get the data
  try {
    const { data } = await hygraph.request(query); // Assuming you have a function to make the GraphQL request

    const imageGrid = document.querySelector('.image-grid'); // Select the grid container

    // Iterate through the images and create <img> elements for each
    data.partners.image.imagePartners.forEach((imageData, index) => {
      const imageElement = document.createElement('img');
      imageElement.src = imageData.url;
      imageElement.alt = `Image ${index + 1}`; // Alt text with index
      imageGrid.appendChild(imageElement);
    });

    // Apply CSS for the grid layout (you can customize this to your needs)
    imageGrid.style.display = 'grid';
    imageGrid.style.gridTemplateColumns = 'repeat(3, 1fr)'; // 3 columns
    imageGrid.style.gridGap = '10px'; // Gap between images
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
