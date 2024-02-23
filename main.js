import "./style.css";

document.querySelector("#app").innerHTML = `
<header>
<h1>CV de Nathalie Hance</h1>
</header>

<section>
<div class="photo">
<img src="public/Hance-Nathalie.jpg" alt="Ma photo de profil">
</div>
<div class="prez">
    <h2>Qui suis-je ?</h2>
    <p>Intérimaire pendant plus de 30 ans. J'ai privilégié d'être disponible pour mes 
    3 filles. Quand elles sont devenues grandes , je me suis passionnée pour l'informatique
    en commençant par fabriquer leur pc à partir de pièces de pc récupérer . Ensuite je voulais savoir créer 
    des sites du début à la fin et c'est comme ca que je suis devenue développeuse web  </p>
    <a href="#" download>Télécharger mon CV</a>
</div>
<div class="contact">
    <h2>Informations de contact</h2>
    <div class="contact-flex">
        <p>Nom : </p>
        <p>Hance Nathalie</p>
    </div>
    <div class="contact-flex">
        <p>Adresse : </p>
        <p>6 Rue des saisons - 1300 Limal</p>
    </div>
    <div class="contact-flex">
        <p>Téléphone :</p>
        <p>0492 05 80 02</p>
    </div>
    <div class="contact-flex">
        <p>Mail : </p>
        <p><a href="mailto:nathpasc69@gmail.com">nathpasc69@gmail.com</a></p>
    </div>
    <div class="contact-flex">
        <p>Permis :</p>
        <p>Non</p>
    </div>
    <div class="social">
        <a href="#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/fb.png" alt="Logo Fb"></a>
        <a href="#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/tw.png" alt="Logo Tw"></a>
        <a href="#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/lk.png" alt="Logo Lk"></a>
        <a href="#"><img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/yt.png" alt="Logo Yt"></a>
    </div>
</div>
</section>

<section>
<h2>Expériences professionnelles</h2>
<div class="exp">
    <div class="exp-logo">
        <a href="#"><img src="public/code.jpg" alt="Logo codes"></a>
    </div>
    <div class="exp-info">
        <h3>Créatrice stagiaire</h3>
        <h4>Hance Nathalie</h4>
        <h4>Septembre 2021 - Aujourd'hui</h4>
    </div>
  
    </div>
</div>
</section>

<section>
<h2>Formation</h2>
<div class="exp">
    <div class="exp-logo">
        <a href="#"><img src="public/ifosup.jpg" alt="Logo EDHEC"></a>
    </div>
    <div class="exp-info">
        <h3>Ifosup Wavre Webdeveloper</h3>
        <h4>2021 - 2023</h4>
    </div>
    <div class="exp-desc">
        <p>blablabla</p>
    </div>
</div>

<div class="exp">
    <div class="exp-logo">
        <a href=""><img src="public/sjb.jpg" alt=""></a>
    </div>
    <div class="exp-info">
        <h3>Fomation community manager</h3>
        <h4>2020 - 2021</h4>
    </div>
    <div class="exp-desc">
        <p>blablabla</p>
    </div>
    </div>
    <div class="exp">
    <div class="exp-logo">
        <a href="#"><img src="public/ifosup.jpg" alt="Logo Dumont"></a>
    </div>
    <div class="exp-info">
        <h3>Ifosup Wavre Webdeveloper</h3>
        <h4>2017 - 2019</h4>
    </div>
    <div class="exp-desc">
        <p>blablabla</p>
    </div>
</div>
   
    <div class="exp">
    <div class="exp-logo">
        <a href=""><img src="public/sjb.jpg" alt=""></a>
    </div>
    <div class="exp-info">
        <h3>Formation webdesign</h3>
        <h4>2018-2019</h4>
    </div>
    <div class="exp-desc">
        <p>blablabla</p>
    </div>
   </div>
</div>
</section>

<section>
<h2>Compétences</h2>
<h3 class="h3gauche">Professionnelles</h3>
<div class="comp">
    <p>HTML / CSS</p>
    <div class="conteneur-barre"><span class="barre c100"></span></div>
</div>
<div class="comp">
    <p>PHP / MySQL</p>
    <div class="conteneur-barre"><span class="barre c95"></span></div>
</div>
<div class="comp">
    <p>JavaScript</p>
    <div class="conteneur-barre"><span class="barre c90"></span></div>
</div>
<div class="comp">
    <p>SEO</p>
    <div class="conteneur-barre"><span class="barre c100"></span></div>
</div>
<h3 class="h3gauche">Personnelles</h3>
<div class="comp2">
    <p>Créativité</p>
    <p>90%</p>
    <div class="conteneur-barre2"><span class="barre c90"></span></div>
</div>
<div class="comp2">
    <p>Adaptation</p>
    <p>85%</p>
    <div class="conteneur-barre2"><span class="barre c85"></span></div>
</div>
<div class="comp2">
    <p>Sérieux</p>
    <p>95%</p>
    <div class="conteneur-barre2"><span class="barre c95"></span></div>
</div>
<div class="comp2">
    <p>Pédagogie</p>
    <p>95%</p>
    <div class="conteneur-barre2"><span class="barre c95"></span></div>
</div>
</section>

<section>
<h2>Centres d'intérêt</h2>

<figure class="interet">
    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/cuisine.jpg" alt="Cuisine">
    <figcaption>Cuisine</figcaption>
</figure>
<figure class="interet">
    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/gaming.jpg" alt="Gaming">
    <figcaption>Jeux vidéos</figcaption>
</figure>
<figure class="interet">
    <img src="https://www.pierre-giraud.com/wp-content/uploads/2019/07/livre.jpg" alt="Littérature">
    <figcaption>Littérature</figcaption>
</figure>
</section>

<footer>
<p><a >©Hance Nathalie</a> 2024</p>
<p>Reproduction à des fins commerciales interdite.</p>

</footer>
`;
