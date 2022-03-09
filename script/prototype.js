// Javascript Lanjutan (Advanced Javascript)
// PROTOTYPE

function Avatar(name, energy) {
  /**
   * in backstage : 
   * let this = Object.create(Avatar.prototype)
   * 
   *    - default parent -> prototype
   */
  
  this.name   = name;
  this.energy = energy;

  return this;
}

Avatar.prototype.sleep = function(point) {
  this.energy += point;
  return `${this.name}'s energy increased to ${this.energy}`;
}

Avatar.prototype.fight = function(point) {
  this.energy -= point;
  return `${this.name}'s energy reduced to ${this.energy}`;
}

let orga = new Avatar('Orga Itsuka', 68)



// class version
class Avatar2 {
  constructor(name, energy) {
    this.name   = name;
    this.energy = energy;
  }

  sleep(point) {
    this.energy += point;
    return `${this.name}'s energy increased to ${this.energy}`;
  }
  
  fight(point) {
    this.energy -= point;
    return `${this.name}'s energy reduced to ${this.energy}`;
  }
}

let mikazuki = new Avatar2('Mikazuki Augus', 99
)


/**
 * let angka = [];
 * dibalik layar : 
 *    - let angka = new Array();
 *    - function Array() {
 *          let this = Object.create(Array.prototype)
 *      }
 * 
 * contoh :
 * let angka = [1,2,3];
 * console.log(angka.reverse()); // output : [3,2,1]
 * 
 * Untuk cek, masukkan perintah di console : 
 *   - Array.prototype
 *   - Object.prototype
 *   - Number.prototype
 * 
 */