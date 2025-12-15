<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href=".assets/bootstrap-5.3.8/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Barre de navigation</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Maison</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Fonctionnalités</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Coût</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="pokemon.png" class="d-block w-25" alt="...">
    </div>
    <div class="carousel-item">
      <img src="papillon_citron.jpg" class="d-block w-25" alt="...">
    </div>
    <div class="carousel-item">
      <img src="pokemon.png" class="d-block w-25" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <main class="container">
        <h1> Bonjour Bootstrap !</h1>
        <p> Mon premier site avec Boostrap</p>
        <button type="button" class="btn btn-primary">Mon bouton</button>
        <section class="row gap-1 m-2">
            <article class="col-5"  style="background-color: lightblue;">
                colonne 1 (6 colonnes)
            </article>
            <article class="col-5" style="background-color: lightcoral;">
               colonne 2 (6 colonnes)
            </article>
            <article class= "row">
                <div class="col-8 bg-info">colonne principale</div>
            </article>
             <article class= "row">
                <div class="col-12 col-md-6 col-lg-4 bg-info border border-1 border-dark">carte 1</div>
                <div class="col-12 col-md-6 col-lg-4 bg-secondary">carte 2</div>
                <div class="col-12 col-md-6 col-lg-4 bg-success">carte 3</div>
            </article>
        </section>
</main>
  <script src=".assets/boostrap-5.3.8/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>  
</body>
</html>