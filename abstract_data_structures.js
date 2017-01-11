// 1. Describe
// container adalah tipe data yang isinya merupakan sebuah objek, memiliki key dan value
// method yang terdapat pada container adalah membuat container kosong(constructor),
// menambahkan object pada container, menghapus object, mengosongkan data container,
// mengakses object, dan menghitung panjang data pada container
// ------------
// 2. Implement
class Container{
  constructor(){
    this.arr = []
  }

  insert(val){
    this.arr.push(val)
  }

  find(id){
    for(let i=0; i<this.arr.length; i++){
      if(id==this.arr[i].id){
        return console.log(`Data pada id ${this.arr[i].id} adalah ${this.arr[i].name}`);
      }
    }
  }

  delete(id){
    for(let i=0; i<this.arr.length; i++){
      if(id==this.arr[i].id){
        console.log(`Data ${this.arr[i].id} berhasil dihapus`);
        return this.arr.splice(i,1);
      }
    }
  }

  clear(){
    console.log(`Data berhasil dikosongkan`);
    this.arr = []
  }

  count(){
    return `Panjang data array adalah ${this.arr.length}`
  }
}

let c = new Container()
c.insert({id: 1, name: "adit"});
c.insert({id: 2, name: "yoni"});
c.insert({id: 3, name: "iqbal"});
c.insert({id: 4, name: "bari"});
console.log(c.arr);
c.find(4);
c.delete(1);
console.log(c.arr);
console.log(c.count())
c.clear()
console.log(c.arr);
// ------------
// 3. Get real
