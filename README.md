Web Scrpping - 
In the folder, there is a app.js file which which conatins the all the code, also it has pacakage.json which stores all the dependecies and also a folder of node modules which i dont think you can upload.

in app.js , I basically desgined a async function which would scrape the title and content of the page using puppeteer library 
then, i created another function which would get this data and then create andstore it in another CSV file

Then created another function which would navigate to the homepage, scarpe all the urls and push it in an array.

Then lastly createed a main function in which all the url in the array are send as a parameter to initial function, so that it can scrape the content of them.

I didnt use clustering but this basically does the same, in clustering though all the process run in parallel.

Express Server - 

In the folder, there is a datd folder which contains the json file , and app.js which conatins the code.

I have used CORS in this program, which provides additional security features.

I initially decalred an endpoint to the localhost url, and it returns the complete data if no parameter are provided in the url
Since the json file has nested objects, i used spread operator to store the filtered data, and also spilted the parameters by '.'
Then iterated through each object and checked if the data stored is an object and then stored in filtered data and returned it.
finally created a server on localhost. 
