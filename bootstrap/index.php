<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
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
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>  
</body>
</html>