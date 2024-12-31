// check for slug
const str = '';
const arr = str.split('/').slice(1).map((part) => decodeURIComponent(part));;
console.log('arr', arr);




// check for slug and clear
let x = arr.map((v, i) => {
    if (v.includes('-')) {
        console.log('this is slug');
        let slug = "فرض-نماز-کے-مسائل";
        let s = slug.split('-').join(' ');

        return s;

    }
    return v;
})

console.log('s', x);




