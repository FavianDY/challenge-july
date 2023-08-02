const toggleMenu = document.querySelector(".menu-toggle input");
const navMenu = document.querySelector(".ul-nav");

toggleMenu.addEventListener("click", () => {
    toggleMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".menu-toggle span")
    .forEach(n => n.addEventListener("click", () => {
        toggleMenu.classList.remove("active");
        navMenu.classList.remove("active");
    }))


// // let response = fetch('/11july2023/data/data.json');
// // fetch('/11july2023/data/data.json').then(response => response.text()).then(data => console.log(data));

// // // const a = async () => {
// // //     let url = '/data/data.json';
// // //     try {
// // //         let res = await fetch(url);
// // //         return await res.json();
// // //     } catch (error) {
// // //         console.log(error);
// // //     }
// // // } 
// // // a();

// // const fetchText = async () => {
// //     let response = await fetch('/11july2023/data/data.json');
// //     console.log(response.status);
// //     console.log(response.statusText);
    
// //     if (response.status === 200) {
// //         let data = await response.text();
// //     }
// // }
// // fetchText();

// // // const getUsers = async () => {
// // //     let re = 
// // // }
// // console.log('OK')
// const fetchPendidikan = "https://reqres.in/api/users";
// const hitAPI = async () => {
//     const api = await fetch(fetchPendidikan)
//     const dataPendidikan = await api.json()
//     console.log(dataPendidikan)
// }
// hitAPI()

// // const endpoint = "https://reqres.in/api/users"
// // fetch(endpoint, {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json",
// //     },
// //     body: JSON.stringify({
// //         email: "",
// //         firstName: ""
// //     }),
// // }).then((result) => result.json()).then((data)=> console.log(data))

// 
// const fetchPendidikan = "/11july2023/data/pendidikan.json";
// fetch(fetchPendidikan)
//     .then(hasilPendidikan => hasilPendidikan.json())
//     .then(hasilPendidikan => {
//         const pendidikan = hasilPendidikan.Search;
//         let isiPendidikan = '';
//         pendidikan.forEach(n => isiPendidikan += showPendidikan(n));
//         const pendidikanContainer = document.querySelector('.pendidikan');
//         pendidikanContainer.innerHTML = isiPendidikan;
//     });

//
// const pendidikan = async () => {
//     let response = await fetch(fetchPendidikan);
//     console.log(response.status);
//     console.log(response.statusText);
//     if (response.status === 200) {
//         let data = await response.text();
//     } else if (response.status === 404) {
//         let data = await response.text()
//     }
// }
// pendidikan();

// const getPendidikan = () => {
//     try {
//         let res = await fetch(fetchPendidikan);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// const renderPendidikan = () => {
//     let 
// }