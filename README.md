# Backend for the kiwi homework


# To run

* Install packages: `yarn install` or `npm install`
* Run the server: `yarn start` or `npm start`
* Server is available on port 3000

# Endpoints

* `/expand/<numeric string>`

Transforms the numeric string into the corresponding expansion. For example, the given input `23` will return: `[ad, ae, af, bd, be, bf, cd, ce, cf]`. Optionally you can set limit of returned expansions by adding a query parameter ?limit=<count> where count is maximum count of expansions to be returned.


* `/predict/<numeric string>`

Return predicted words that corresponds to the given numeric string. For example, the given input `43556` will return: `[ "hello" ]` or for input `5263722737` multiple words `[ "landscaper", "landscapes" ]`. Optionally you can set limit of returned predictions by adding a query parameter ?limit=<count> where count is maximum count of predictions to be returned.

# Extras

* Generating the T9 dictionary

In order to create a dictionary for the T9 predictions there is a JSON file (`words-en-t9.json`) that contains all textonyms that correspond to the given numeric strings. This dictionary is generated from a text file (`words.en.txt`) that contains words for prediction. You can generate the dictionary file by using command `npm run gen-dict`.


