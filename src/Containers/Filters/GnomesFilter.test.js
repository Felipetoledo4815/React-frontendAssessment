import gnomeFilter from './GnomeFilter';

describe('gnomeFilter', function() {

    const gnomeN1 = {
        "id":0,
        "name":"Tobus Quickwhistle",
        "thumbnail":"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
        "age":306,
        "weight":39.065952,
        "height":107.75835,
        "hair_color":"Pink",
        "gender":"Male",
        "professions":[
           "Metalworker",
           "Woodcarver",
           "Stonecarver",
           " Tinker",
           "Tailor",
           "Potter"
        ],
        "friends":[
           "Cogwitz Chillwidget",
           "Tinadette Chillbuster"
        ]
    };
    const gnomeN2 = {
        "id":1,
        "name":"Fizkin Voidbuster",
        "thumbnail":"http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
        "age":288,
        "weight":35.279167,
        "height":110.43628,
        "hair_color":"Green",
        "gender":"Female",
        "professions":[
           "Brewer",
           "Medic",
           "Prospector",
           "Gemcutter",
           "Mason",
           "Tailor"
        ],
        "friends":[
     
        ]
    };
    const gnomeN3 = {
        "id":2,
        "name":"Malbin Chromerocket",
        "thumbnail":"http://www.publicdomainpictures.net/pictures/30000/nahled/maple-leaves-background.jpg",
        "age":166,
        "weight":35.88665,
        "height":106.14395,
        "hair_color":"Red",
        "gender":"Male",
        "professions":[
           "Cook",
           "Baker",
           "Miner"
        ],
        "friends":[
           "Fizwood Voidtossle"
        ]
    };
    const gnomes = [gnomeN1, gnomeN2, gnomeN3];

    describe('by name', function() {
        it('should return an array with 1 gnome', () => {    
            var filteredGnomes = gnomeFilter(gnomes, 'tobus quickwhistle');
            expect(filteredGnomes[0]).toEqual(gnomeN1);
        });
        
        it('should return an empty array', function() {
            var filteredGnomes = gnomeFilter(gnomes, 'zedkin quickrivet');
            expect(filteredGnomes).toEqual([]);
        });
    })

    describe('by hair_color', function() {
        it('should return an array with 1 gnome', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', 'red');
            expect(filteredGnomes[0]).toEqual(gnomeN3);
        });

        it('should return an empty array', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', 'black');
            expect(filteredGnomes).toEqual([]);
        });
    });

    describe('by gender', function() {
        it('should return an array with 2 gnomes', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', '', 'male');
            expect(filteredGnomes).toEqual([gnomeN1, gnomeN3]);
        });

        it('should return an array with 3 gnomes', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', '', 'ma');
            expect(filteredGnomes).toEqual([gnomeN1, gnomeN2, gnomeN3]);
        });
    });

    describe('by profession', function() {
        it('should return an array with 2 gnomes', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', '', '', 'tailor');
            expect(filteredGnomes).toEqual([gnomeN1, gnomeN2]);
        });

        it('should return an empty array', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', '', '', 'asd');
            expect(filteredGnomes).toEqual([]);
        });

        it('should return an array with 1 gnomes', function() {
            var filteredGnomes = gnomeFilter(gnomes, '', '', '', 'baker', 'cook');
            expect(filteredGnomes).toEqual([gnomeN3]);
        });
    });
})