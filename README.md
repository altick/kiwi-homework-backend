# Backend for the kiwi homework

# Endpoints

* `/expand/<numeric string>`
Transforms the numeric string into the corresponding expansion. For example, the given input `23` will return: `[ad, ae, af, bd, be, bf, cd, ce, cf]`
* `/predict/<numeric string>`
Return predicted words that corresponds to the given numeric string. For example, the given input `43556` will return: `[ "hello" ]` or for input `5263722737` multiple words `[ "landscaper", "landscapes" ]`.

# Extras

* Generating the T9 dictionary
In order to create a dictionary for the T9 predictions there is a JSON file (`words-en-t9.json`) that contains all textonyms that correspond to the given numeric string. This dictionary is generated from a text file (`words.en.txt`) that contains words for prediction. You can generate the dictionary file by using command `npm run gen-dict`.

