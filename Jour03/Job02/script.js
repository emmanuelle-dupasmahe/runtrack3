$(function () {

    const TOTAL_PIECES = 6;

    function shuffleDraggables() {
        const container = $('#draggableContainer');
        const items = container.children('.draggable').get();

        // Algorithme de Fisher-Yates pour mélanger
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [items[i], items[j]] = [items[j], items[i]];
        }

        container.empty();
        items.forEach(item => container.append(item));

        $('#result').text('').removeClass('success error');
    }

    // 
    function initGame() {
        
        // Vide toutes les drop zones et déplace les morceaux dans le container
        $('.drop-zone').each(function() {
            const draggable = $(this).find('.draggable');
            if (draggable.length > 0) {
                $('#draggableContainer').append(draggable);
                draggable.css({
                    position: 'relative',
                    left: '0',
                    top: '0'
                });
            }
            $(this).removeClass('filled');
        });

        // Mélange les éléments 
        shuffleDraggables();

        // Réinitialise le résultat
        $('#result').text('').removeClass('success error');

        
        $('.draggable').draggable({
            revert: 'invalid',  
            containment: 'body',
            cursor: 'move',
            zIndex: 1000,
            start: function() {
                $(this).css('opacity', '0.7');
            },
            stop: function() {
                $(this).css('opacity', '1');
            }
        });
    }

    // les cases de l'arc-en-ciel
    $('.drop-zone').droppable({
        accept: '.draggable',
        tolerance: 'intersect',

        drop: function(event, ui) {
            const dropZone = $(this);
            const draggable = ui.draggable;

            
            const existingItem = dropZone.find('.draggable');
            if (existingItem.length > 0) {
                $('#draggableContainer').append(existingItem);
                existingItem.css({
                    position: 'relative',
                    left: '0',
                    top: '0'
                });
            }

            // Place le nouvel élément dans la zone
            dropZone.append(draggable);
            draggable.css({
                position: 'relative',
                left: '0',
                top: '0'
            });

            // Marque la zone comme remplie
            dropZone.addClass('filled');

            // Réinitialise le résultat
            $('#result').text('').removeClass('success error');
        },

        out: function(event, ui) {
            // Si l'élément est déplacé hors de la zone
            $(this).removeClass('filled');
        }
    });

    // Configure le container des draggables comme droppable aussi (pour récupérer les morceaux)
    $('#draggableContainer').droppable({
        accept: '.draggable',
        tolerance: 'intersect',

        drop: function(event, ui) {
            const draggable = ui.draggable;
            const parentZone = draggable.parent('.drop-zone');

            if (parentZone.length > 0) {
                parentZone.removeClass('filled');
            }

            // Replace dans le container source
            $(this).append(draggable);
            draggable.css({
                position: 'relative',
                left: '0',
                top: '0'
            });

            // Réinitialise le résultat
            $('#result').text('').removeClass('success error');
        }
    });

    // Vérifie la solution
    $('#btnVerifier').on('click', function() {
        let isCorrect = true;
        let filledCount = 0;

        // Vérifie chaque zone
        $('.drop-zone').each(function() {
            const dropZone = $(this);
            const expectedNumber = parseInt(dropZone.data('number'));
            const draggable = dropZone.find('.draggable');

            if (draggable.length > 0) {
                filledCount++;
                const actualNumber = parseInt(draggable.data('number'));

                if (expectedNumber !== actualNumber) {
                    isCorrect = false;
                }
            }
        });

        const resultDiv = $('#result');

        // Vérifie si toutes les cases sont remplies (doit être 6)
        if (filledCount !== TOTAL_PIECES) {
            resultDiv
                .text('⚠️ Toutes les ' + TOTAL_PIECES + ' cases doivent être remplies !')
                .removeClass('success')
                .addClass('error');
            return;
        }

        // Affiche le résultat final
        if (isCorrect) {
            resultDiv
                .text('🎉 Vous avez gagné ! L\'arc-en-ciel est reconstitué !')
                .removeClass('error')
                .addClass('success');
        } else {
            resultDiv
                .text('😿 Vous avez perdu. L\'ordre n\'est pas correct.')
                .removeClass('success')
                .addClass('error');
        }
    });

    // Bouton Mélanger 
    $('#btnShuffle').on('click', function() {
        shuffleDraggables();
    });
    
    // Bouton Réinitialiser 
    $('#btnReset').on('click', function() {
        initGame();
    });

    
    initGame();

});