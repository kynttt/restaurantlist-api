
(./list.png)

# Restaurant API Server

This Express server provides an API endpoint for fetching a list of restaurants from an external source.

## Deployment

The APP is already deployed and accessible at:

Vercel: [https://restaurantlist-api.vercel.app/api/restaurants]

## Setup for Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/kynttt/restaurantlist-api.git

2. Navigate to the project directory:
    ```bash
    cd restaurantlist-api

3. Install dependencies:
    npm install



## Running the Server Locally

1. Start the server:
    npm start

2. The server will run on port 5000 by default. You can access the API at: http://localhost:5000/api/restaurants


## Special Instructions

The server uses CORS middleware to allow cross-origin requests. Make sure to configure the CORS settings appropriately based on your deployment environment.

The external API endpoint is currently set to 'https://nextjs-orpin-omega-98.vercel.app/api/restaurants'. If this URL changes or if you need to fetch data from a different source, update the URL in the axios.get call in the /api/restaurants route.

