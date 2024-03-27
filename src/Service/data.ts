const data = [
  {
    id: 1,
    title: "Change Preventers",
    description:
      "Merupakan sebuah ketentuan yang digunakan di dalam Software Development untuk mendeskripsikan struktur kode yang mempersulit untuk dilakukannya modifikasi. Kode ini menciptakan sebuah situasi dimana perubahan yang terlihat sederhana pada suatu bagian kode memerlukan pengeditan bertahap di seluruh program yang membuat pengembangan menjadi lambat dan tidak efisien.",
    type: [
      {
        id: 1,
        smell: "Divergent Change",
        img: "divergentChange.png",
        description:
          "Hal ini terjadi ketika salah satu kelas menjadi tempat pembuangan untuk fungsionalitas yang tidak berhubungan. Memodifikasi kelas untuk mengatasi satu fitur memerlukan tinjau balik dan adanya kemungkinan untuk mengubah kode untuk fitur lainnya juga.",
        solution: [
          "- Extract Class",
          "(If different classes have the same behavior, you may want to combine the classes through inheritance)",
          "- Extract Superclass",
          "- Extract Subclass",
        ],
        code: [
          {
            before: `// Order.java:
public class Order {
      public void create() {
          // logic for creating order
      }
          
      public void process() {
          // logic for processing order
      }
}`,
            after: `// Order.java:
public class Order {
      private OrderCreator creator;
      private OrderProcessor processor;

      public void create() {
            creator.create();
      }

      public void process() {
            processor.process();
      }
}

// OrderCreator.java:
public interface OrderCreator {
      void create();
}

// OrderProcessor.java:
public interface OrderProcessor {
      void process();
}`,
          },
        ],
        codeDescription:
          "'Order' dibuat agar tidak langsung mengimplementasikan logika untuk membuat dan memproses pesanan, melainkan menggunakan objek 'OrderCreator' dan 'OrderProcessor' yang diimplementasikan melalui interface.",
      },
      {
        id: 2,
        smell: "Shotgun Surgery",
        img: "shotgunSurgery.png",
        description:
          "Situasi ini muncul ketika sebuah modifikasi memerlukan beberapa editan kecil yang tersebar diseluruh kelas dalam basis kode. Disini kita mengedit modifikasi di seluruh class yang sudah kita buat dengan modifikasi yang sama.",
        solution: [
          "- Move Method",
          "- Move Field",
          "(If moving code to the same class leaves the original classes almost empty)",
          "- Inline Class",
        ],
        code: [
          {
            before: `// User.java:
public class User {
      public void changeName(String newName) {
          // logic to change name
      }

      public void changeEmail(String newEmail) {
          // logic to change email
      }

      public void changeAddress(String newAddress) {
          // logic to change address
      }
}`,
            after: `// User.java:
public class User {
      private UserData userData;

      public void changeName(String newName) {
            userData.setName(newName);
      }

      public void changeEmail(String newEmail) {
            userData.setEmail(newEmail);
      }

      public void changeAddress(String newAddress) {
            userData.setAddress(newAddress);
      }
}

// UserData.java:
public class UserData {
      private String name;
      private String email;
      private String address;
      
      public String getName() {
            return name;
      }
      public void setName(String name) {
            this.name = name;
      }
      public String getEmail() {
            return email;
      }
      public void setEmail(String email) {
            this.email = email;
      }
      public String getAddress() {
            return address;
      }
      public void setAddress(String address) {
            this.address = address;
      }
}`,
          },
        ],
        codeDescription:
          "Logika untuk mengubah data user dipisahkan ke dalam class 'UserData', sehingga jika ada perubahan pada implementasi atau data yang diubah, hanya perlu dilakukan perubahan pada satu tempat yaitu class 'UserData'.",
      },
      {
        id: 3,
        smell: "Parallel Inheritance Hierarchies",
        img: "parallelInheritance.png",
        description:
          "Hal ini terjadi ketika kita menambah sebuah kelas baru yang memaksa kita untuk membuat kelas dependen lainnya. Ikatan kelas yang saling berhubungan ini akan menjadi lemah dan sulit untuk dipertahankan. Setiap adanya perubahan dalam salah satu dari kelas dapat memengaruhi semua hierarki dan menuntut penyesuaian pada semua kelas yang bergantung.",
        solution: ["- Move Method", "- Move Field"],
        code: [
          {
            before: `public static void main(String[] args) {
  class Animal {
      // common animal attributes and methods
  }
  class Dog extends Animal {
      // dog-specific attributes and methods
  }
  class Cat extends Animal {
      // cat-specific attributes and methods
  }
  class Bird extends Animal {
      // bird-specific attributes and methods
  }
  class Fish extends Animal {
      // fish-specific attributes and methods
  }
}`,
            after: `public static void main(String[] args) {
      class Animal {
          // common animal attributes and methods
      }
      class Pet extends Animal {
          // attributes and methods common to pets
      }
      class WildAnimal extends Animal {
          // attributes and methods specific to wild animals
      }
      class Dog extends Pet {
          // dog-specific attributes and methods
      }
      class Cat extends Pet {
          // cat-specific attributes and methods
      }
      class Bird extends Pet {
          // bird-specific attributes and methods
      }
      class Shark extends WildAnimal {
          // shark-specific attributes and methods
      }
      class Tiger extends WildAnimal {
          // tiger-specific attributes and methods
      }
}`,
          },
        ],
        codeDescription:
          "Class 'Pet' dan 'WildAnimal' diperkenalkan sebagai superclass yang mewakili hirarki parallel antara hewan peliharaan dan hewan liar. Ini membantu mengurangi duplikasi kode dan membuat struktur kelas menjadi lebih jelas.",
      },
    ],
  },
  {
    id: 2,
    title: "Dispensables",
    description:
      "Merupakan sebuah bagian dari struktur kode yang fungsinya tidak berguna dan tidak diperlukan, yang dimana ketika bagian itu dihapus struktur kode akan terlihat lebih rapih, lebih efisien dan mudah untuk dimengerti. Bagian ini juga bekerja sebagai indikator yang menandakan masalah yang dapat menghambat kesehatan kode dalam jangka panjang.",
    type: [
      {
        id: 1,
        smell: "Comments",
        img: "comments.png",
        description:
          "Sebuah kode yang diiringi dengan komentar, dapat membantu seorang programmer untuk memahami fungsionalitas dan tujuan code tersebut. Tetapi, comment akan kehilangan nilainya seiring waktu berjalan. Komentar yang tidak pernah di update, tidak akan mencerminkan keadaan kode saat ini atau komentar yang berlebihan yang hanya mengulang apa yang diungkapkan kode tersebut menjadi elemen yang tidak berguna.",
        solution: [
          "(If a comment is intended to explain a complex expression)",
          "- Extract Variable",
          "(If a comment explains a section of code, this section can be turned into a separate method)",
          "- Extract Method",
          "(If a method has already been extracted, but comments are still necessary)",
          "- Rename Method",
          "(If you need to assert rules about a state that’s necessary for the system to work)",
          "- Introduce Assertion",
        ],
        code: [
          {
            before: `public class Calculator {
        /**
       * Calculates the area of a rectangle. This method assumes
       * both length and width are positive values. If negative values
       * are provided, the result might be unexpected.
       *
       * @param length The length of the rectangle.
       * @param width  The width of the rectangle.
       * @return The calculated area of the rectangle.
       * @throws IllegalArgumentException if length or width is negative.
       */
      public double calculateArea(double length, double width) {
            if (length < 0 || width < 0) {
                  throw new IllegalArgumentException("Length and width must be positive values.");
            }
            return length * width;
      }
}
            `,
            after: `public class Calculator {
      // This method calculates the are of a triangle
      public double calculateArea(double length, double width){
            return length * width;
      }
}`,
          },
        ],
        codeDescription:
          "Pada class 'Calculator', comments yang tidak digunakan dapat dihapus dan hanya menyisakan comments yang dibutuhkan sehingga code tidak terlalu panjang.",
      },
      {
        id: 2,
        smell: "Duplicate Code",
        img: "duplicateCode.png",
        description:
          "Ketika ada fungsi identikal yang diimplementasi di dua tempat yang berbeda. Hal ini tidak hanya menambah-nambah kode tetapi juga membuat maintenance yang sulit. Jika sebuah bug fix atau update diperlukan, seorang programmer harus mencari semua duplikasi yang mana sangat menghabiskan waktu.",
        solution: [
          "(If the same code is found in two or more methods in the same class)",
          "- Extract Method",
          "(If the same code is found in two subclasses of the same level)",
          "- Pull Up Field",
          "- Pull Up Constructor Body",
          "- Form Template Method",
          "- Substitute Algorithm",
          "(If duplicate code is found in two different classes)",
          "- Extract Superclass",
          "- Extract Class",
          "(If a large number of conditional expressions are present and perform the same code)",
          "- Consolidate Conditional Expression",
          "- Extract Method",
          "(If the same code is performed in all branches of a conditional expression)",
          "- Consolidate Duplicate Conditional Fragments",
        ],
        code: [
          {
            before: `public static void main(String[] args) {
      class ShapeCalculator {
            public double calculateCircleArea(double radius) {
                  return Math.PI * radius * radius;
            }

            public double calculateCirclePerimeter(double radius) {
                  return 2 * Math.PI * radius;
            }

            public double calculateSquareArea(double sideLength) {
                  return sideLength * sideLength;
            }

            public double calculateSquarePerimeter(double sideLength) {
                  return 4 * sideLength;
            }
      }
}`,
            after: `public static void main(String[] args) {
      class Circle {
            public double calculateArea(double radius) {
                  return Math.PI * radius * radius;
            }
  
            public double calculatePerimeter(double radius) {
                  return 2 * Math.PI * radius;
            }
      }
  
      class Square {
            public double calculateArea(double sideLength) {
                  return sideLength * sideLength;
            }
  
            public double calculatePerimeter(double sideLength) {
                  return 4 * sideLength;
            }
      }          
}`,
          },
        ],
        codeDescription:
          "Dalam contoh setelah refactor, fungsi-fungsi perhitungan luas dan keliling ditempatkan di dalam class 'Circle' dan 'Square' masing-masing, menghilangkan duplikasi kode di class 'ShapeCalculator'",
      },
      {
        id: 3,
        smell: "Lazy Class",
        img: "lazyClass.png",
        description:
          "Sebuah tanda kode yang diatur dengan buruk atau sebuah upaya untuk merekayasa konsep yang sederhana secara berlebihan. Mereka berkontribusi dalam menambah kode yang tidak berguna dan membuat hierarki sebuah kelas menjadi lebih kompleks dari yang diperlukan.",
        solution: ["- Inline Class", "- Collapse Hierarchy"],
        code: [
          {
            before: `	public static void main(String[] args) {
      class Employee {
            private String name;
            private String department;
  
            public Employee(String name, String department) {
                  this.name = name;
                  this.department = department;
            }
  
            public String getName() {
                  return name;
            }
      }
}`,
            after: `public static void main(String[] args) {
      class Employee {
            private String name;
            private String department;
    
            public Employee(String name, String department) {
                  this.name = name;
                  this.department = department;
            }
    
            public String getName() {
                  return name;
            }
    
            public String getDepartment() {
                  return department;
            }
      }
}`,
          },
        ],
        codeDescription:
          "Dalam contoh sebelum refactor, class 'Employee' hanya memiliki satu fungsi ('getName()') dan tidak ada perilaku atau method lain yang relevan. Setelah refactor, class 'Employee' memiliki method 'getDepartment()' yang memberikan nilai tambah yang lebih besar.",
      },
      {
        id: 4,
        smell: "Data Class",
        img: "dataClass.png",
        description:
          "Sebuah kelas yang hanya berisi field dan metode kasar untuk mengakses getter dan setternya. Ini hanya merupakan tempat untuk data yang digunakan oleh kelas lain. Kelas-kelas ini tidak berisi fungsionalitas tambahan dan tidak dapat mengoperasi sebuah data yang mereka miliki secara mandiri.",
        solution: [
          "(If a class contains public fields)",
          "- Encapsulate Field",
          "(If data stored in a collection)",
          "- Encapsulate Collection",
          "(If the functionality would be better located in the data class itself)",
          "- Move Method",
          "- Extract Method",
          "(If you want to get rid of old methods for data access that give overly broad access to the class data)",
          "- Remove Setting Method",
          "- Hide Method",
        ],
        code: [
          {
            before: `public static void main(String[] args) {
      class Person {
            private String name;
            private int age;
    
            public Person(String name, int age) {
                  this.name = name;
                  this.age = age;
            }
    
            public String getName() {
                  return name;
            }
    
            public int getAge() {
                  return age;
            }
      }
}`,
            after: `public static void main(String[] args) {
      class Person {
            private String name;
            private int age;
    
            public Person(String name, int age) {
                  this.name = name;
                  this.age = age;
            }
    
            public String getName() {
                  return name;
            }
    
            public void setName(String name) {
                  this.name = name;
            }
    
            public int getAge() {
                  return age;
            }
    
            public void setAge(int age) {
                  this.age = age;
            }
      }
}`,
          },
        ],
        codeDescription:
          "Dalam contoh sebelum refactor, class 'Person' hanya memiliki atribut dan getter tanpa adanya perilaku atau method lain yang relevan. Setelah refactor, ditambahkan setter untuk memungkinkan perubahan data pada objek 'Person'.",
      },
      {
        id: 5,
        smell: "Dead Code",
        img: "deadCode.png",
        description:
          "Bagian sebuah kode menjadi dead code ketika modifikasi logic di dalam program atau penghapusan sebuah fungsi yang dapat membuatnya tidak dapat digunakan. Dead Code menambah berat yang sebenarnya tidak diperlukan di dalam sebuah struktur kode, menambah beban dan membuatnya menjadi lebih sulit untuk dipahami.",
        solution: [
          "- Delete unneeded files",
          "(If there is unnecessary class)",
          "- Inline Class",
          "- Collapse Hierarchy",
          "(If there is unneeded parameter)",
          "- Remove Parameter",
        ],
        code: [
          {
            before: `public class Calculate {
      public double calculate(double price, boolean isDiscount) {
            double discountPrice = 0;
    
            if (isDiscount) {
                  if (price < 10000) {
                        discountPrice = price * 0.1;
                  } else {
                        discountPrice = price * 0.2;
                  }
            }
    
            if (isDiscount) // Dead code
                  discountPrice = price * 0.15;
          
            return price - discountPrice;
      }
}`,
            after: `public double calculate(double price, boolean isDiscount) {
      double discountRate = isDiscount ? 0.15 : 0;
      double discountPrice = price * discountRate;
      
      return price - discountPrice;
}`,
          },
        ],
        codeDescription:
          "Dalam refaktorisasi ini, kita menghapus blok if yang kedua dan menggantinya dengan penggunaan variabel 'discountRate' untuk menentukan besarnya diskon, yang kemudian digunakan untuk menghitung 'discountPrice'. Dengan ini, kita menghilangkan dead code dan membuat kode lebih bersih dan efisien.",
      },
      {
        id: 6,
        smell: "Speculative Generality",
        img: "speculativeGenerality.png",
        description:
          "Sebuah spekulasi terhadap kode yang dapat memperkenalkan struktur logika yang membingungkan atau pola desain yang terlalu rumit untuk mengantisipasi skenario yang mungkin akan terjadi di masa depan. Hal ini dapat membuat sebuah kode lebih sulit untuk dibaca, sulit dipahami, dan sulit untuk dimodifikasi.",
        solution: [
          "- Collapse Hierarchy",
          "- Inline Class",
          "- Inline Method",
          "- Remove Parameter",
          "- Delete unused fields",
        ],
        code: [
          {
            before: `public static void main(String[] args) {
      class Animal {
          public void eat() {
              // implementation for eating
          }
          public void sleep() {
              // implementation for sleeping
          }
          public void move() {
            // implementation for moving
          }
          public void fly() {
            // implementation for flying
          }
      }

      class Dog extends Animal{
        // Dog properties			
      }
}`,
            after: `public static void main(String[] args) {
      class Animal {
          public void eat() {
              // implementation for eating
          }
          public void sleep() {
              // implementation for sleeping
          }
          public void move() {
            // implementation for moving
          }
      }
      
      class Dog extends Animal{
        // Dog properties			
      }
}`,
          },
        ],
        codeDescription:
          "Dalam refaktorisasi ini, kita menghapus method 'fly()' karena awalnya method ini dibuat dengan spekulasi bahwa akan ada class Animal yang dapat terbang. Namun ternyata setelah produk berjalan lama, spekulasinya ini tidak terbukti.",
      },
    ],
  },
];

export default data;
