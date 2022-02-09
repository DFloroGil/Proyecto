'use strict';

/* General */
const LOREM = [
    /* Used on Blog (0 - 7) */
    'Consequuntur minus repellendus sed culpa libero molestiae vero sint sequi reiciendis voluptatum illo dolore fuga neque voluptate, fugiat nesciunt, sit repudiandae sunt.',
    'Dolore atque, quam quia ipsum commodi expedita quis obcaecati enim facere vitae natus, excepturi possimus voluptatum tenetur maxime quidem aliquam ducimus dolor!',
    'Quos temporibus hic eos repudiandae ad incidunt odit, id porro? Illum quod amet ex odio, error praesentium assumenda laboriosam dicta odit neque.',
    'Cupiditate voluptatum eos unde rem velit recusandae, fugit officia magnam, necessitatibus saepe iure, est illo totam perspiciatis. Voluptatum tempora eligendi consequuntur totam!',
    'Quia ab ducimus saepe incidunt porro. At cupiditate possimus quam, corrupti cumque eveniet, accusamus nihil perspiciatis enim necessitatibus asperiores cum repudiandae architecto!',
    'Ex veniam labore numquam. Dolore dolores saepe illum expedita nesciunt sint! Tempora vitae optio velit non sed numquam culpa officiis repudiandae odio.',
    'Quisquam, pariatur voluptas asperiores reprehenderit, fugit aperiam ipsa voluptatum harum nihil quo, sunt sit saepe error quia ipsam? Non quasi ipsum assumenda!',
    'Perspiciatis quas a unde. Ipsam aliquid magnam ipsa dicta impedit possimus, reprehenderit molestias, a commodi quo eos modi quibusdam aperiam ad totam!',
    /* Used on Doctor (8) */
    'Cupiditate impedit atque praesentium! Numquam accusamus id ipsum, possimus saepe, nostrum officia necessitatibus fugiat quibusdam fugit maxime, eius culpa praesentium molestias facere.',
    /* Used on Gallery (9 - 12) */
    'Placeat autem incidunt reiciendis, dolor natus, quasi atque, explicabo laudantium tenetur qui beatae consequatur dolore quisquam officiis libero.Reprehenderit quo inventore natus!',
    'Quod perferendis dolore laborum commodi voluptates, suscipit excepturi, omnis sit alias delectus praesentium quos unde error culpa nisi dolorum ? Dolor, labore sequi.',
    'Sint ducimus laborum culpa nostrum unde magnam beatae commodi deleniti nulla.Dolorum possimus incidunt minus ducimus, ea cupiditate soluta fugiat debitis earum!',
    'Ex at deleniti delectus minima, quo minus accusamus voluptas molestias debitis eius, natus alias quibusdam voluptatum totam nesciunt consequuntur in sequi accusantium ?',
    /* Used on Index (13 - 18) */
    'Possimus aliquid magni pariatur veniam quidem perspiciatis id soluta deserunt distinctio. Similique, ad praesentium! Nesciunt quod aspernatur nobis fuga dolores labore vitae. Quibusdam magnam quisquam sequi totam corrupti saepe magni excepturi, ab ullam rerum hic quia, maxime labore, similique et id? Vero, fugit saepe.',
    'Temporibus perspiciatis earum id quo expedita, sint neque dolorum voluptas molestiae libero iure deleniti velit reprehenderit omnis in unde, ex illo magni? Ducimus autem esse quae ex repellat ad? Doloribus suscipit explicabo, neque voluptatibus quasi delectus autem. Voluptas itaque, maxime tempora eum ad aspernatur?',
    'Quos corporis enim nemo dolorum, soluta veritatis error fugiat voluptatibus, exercitationem, ratione sequi maxime eaque nulla? Suscipit, praesentium tempore. Vitae, quae voluptate.',
    'Eius repellat perferendis inventore illo totam nulla obcaecati minus asperiores at, dolorem, distinctio porro unde deserunt quia qui voluptatem ea laudantium fuga!',
    'Corrupti, sapiente. Esse, quis dignissimos nisi veritatis accusantium neque ipsa minus temporibus, maxime voluptatibus suscipit dolorem porro quo voluptates autem, eos earum.',
    'Nemo corrupti enim est illo qui ipsa voluptas recusandae rerum assumenda dicta maxime laudantium architecto consequuntur asperiores voluptatibus tempora quaerat, fuga a.',
    /* Used on Staff (19 - 21) */
    'Optio excepturi blanditiis fugiat nihil esse iusto eligendi numquam libero quis consectetur facilis quae modi, aliquam, rem, accusantium incidunt ullam ad quam.',
    'Quibusdam ipsam doloribus, non dolores reprehenderit maiores numquam velit accusamus rerum labore eaque eligendi. Unde ducimus tenetur magni, delectus veritatis officia cum?',
    'Voluptatibus obcaecati dolor totam. Voluptatibus, voluptas! Voluptatum ratione, culpa accusantium veritatis sint a. Nemo, obcaecati. Eaque harum quas inventore, numquam at delectus.'
];

function removeChildsFrom(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

/* Navigation */

let nav = document.querySelector('nav');

function stickyNav() {
    if (globalThis.scrollY > nav.offsetTop) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

/* Contact US */

function mailUsToogle(event) {
    let bubble = document.querySelector('#contactBubble');
    bubble.style.bottom = (bubble.style.bottom === '10%') ? '-100%' : '10%';
    event.stopPropagation();
}


/* Index */

function loadIndexTexts() {
    /* For... Index, Blog, Doctor x2, Staff, Gallery (6 texts) */
    for (let i = 1; i < 7; i++) {
        let node = document.querySelector("#text" + i);
        removeChildsFrom(node);
        node.textContent = LOREM[12 + Number(i)]; // LOREM's Index Starts at index 13
    }
}


/* Blog */

function toggleTab(event, prev) {
    document.querySelector("#" + prev).classList.remove('active');
    event.target.classList.add('active');
    setupBlogList(event.target.id);
    event.stopPropagation();
}

function setupBlogList(id) {
    let artcs = document.querySelectorAll('ARTICLE');

    /* Clear Articles */
    for (let art of artcs) {
        removeChildsFrom(art);
    }

    /* Fill Articles */
    let toShow = getBlogData(artcs.length, id);
    for (let i = 0; i < artcs.length; i++) {
        /* Add Image */
        let img = document.createElement('img');
        img.classList.add((id === 'feedbacks') ? 'right' : 'left');
        img.src = toShow.img[i];
        img.alt = id + "_" + (i + 1);
        artcs[i].append(img);
        /* Add Text */
        let p = document.createElement('p');
        p.textContent = (toShow.cont[i]);
        artcs[i].append(p);
    }
}

function getBlogData(count, id) {
    let imgs = [];
    let content = getBlogContent(id);
    for (let i = 1; i <= count; i++) {
        //url format: /assets/image/blog_(tips|feedbacks)_(number).webp
        imgs.push("../assets/image/blog_" + id + "_" + i + ".webp");
    }
    return ({
        img: imgs,
        cont: content
    });
}

function getBlogContent(id) {
    return (
        (id === 'tips') ? [
            LOREM[1],
            LOREM[3],
            LOREM[5],
            LOREM[7]
        ] : [
            LOREM[0],
            LOREM[2],
            LOREM[4],
            LOREM[6]
        ]
    );
}


/* Doctor */

function setDoctorData() {
    /* Doctor's Picture Animation */
    let doctorImg = document.querySelector('#doctorImg');
    doctorImg.style.opacity = 1;
    /* "Doctor in Numbers" Animation */
    let dataPanes = document.querySelectorAll('.numbers');
    let data = [865, 510, 1350, 35];
    for (let i = 0; i < dataPanes.length; i++) {
        animateNumbers(1, data[i], dataPanes[i]);
    }
    /* Biography */
    console.log(document.querySelector('#text'));
    document.querySelector('#text').textContent = LOREM[8];
}


function animateNumbers(curr, end, data) {
    if (curr <= end) {
        data.textContent = curr++;
        setTimeout(function() { animateNumbers(curr, end, data) }, 12);
    }
}


/* Gallery */
let anim;
let pointer = 0;

function loopGallery(id) {
    fillGalleryContent(id);
    anim = setTimeout(function() {
        id = (id === 3) ? 0 : Number(id) + 1;
        loopGallery(id);
    }, 2000);
}

function toogleGalleryTo(event, id) {
    clearTimeout(anim);
    loopGallery(id);
    event.stopPropagation();
}

function fillGalleryContent(id) {
    /* Dots */
    let dots = document.querySelectorAll('SPAN');
    dots[pointer].classList.remove('active');
    pointer = id;
    dots[pointer].classList.add('active');
    /* Image */
    let img = document.querySelector('#image');
    img.src = "../assets/image/gallery_" + id + ".webp";
    /* Image - Count */
    let count = Number(id) + Number(1);
    document.querySelector('#count').textContent = count + " / 4";
    /* Text Content */
    document.querySelector('#text').textContent = LOREM[(Number(id) + Number(8))];
}

/* Contact */

function initMap() {
    let prop = {
        center: new google.maps.LatLng(39.494931, -0.4706881), // IES Rodrigo Botet Location
        zoom: 19
    };
    let map = new google.maps.Map(document.querySelector('#mappane'), prop);
}