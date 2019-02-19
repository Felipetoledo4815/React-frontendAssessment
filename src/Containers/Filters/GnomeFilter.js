export default function gnomeFilter(gnomes, name, hairColor, gender, profession1, profession2) {
    let filteredGnomes = gnomes;
    filteredGnomes = nameFilter(filteredGnomes, name);
    filteredGnomes = hairColorFilter(filteredGnomes, hairColor);
    filteredGnomes = genderFilter(filteredGnomes, gender);
    filteredGnomes = professionFilter(filteredGnomes, profession1);
    filteredGnomes = professionFilter(filteredGnomes, profession2);
    return filteredGnomes;
};

function nameFilter(gnomes, name) {
    if (!gnomes || !name){
        return gnomes;
    }
    return gnomes.filter((gnome) => {
        return gnome.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    });
}

function hairColorFilter(gnomes, hairColor) {
    if (!gnomes || !hairColor){
        return gnomes;
    }
    return gnomes.filter((gnome) => {
        return gnome.hair_color.toLowerCase().indexOf(hairColor.toLowerCase()) !== -1
    });
}

function genderFilter(gnomes, gender) {
    if (!gnomes || !gender || !(gender.toLowerCase() !== "male" ^ gender.toLowerCase() !== 'female')){
        return gnomes;
    }
    return gnomes.filter((gnome) => {
        return gnome.gender.toLowerCase() === gender.toLowerCase()
    });
}

function professionFilter(gnomes, profession) {
    if (!gnomes || !profession){
        return gnomes;
    }
    return gnomes.filter(gnome => 
        gnome.professions.find(p =>
            p.toLowerCase().indexOf(profession.toLowerCase()) !== -1)
    );
}