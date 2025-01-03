let numbers = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];



// بفاصلة array مفصول بين كل عنصر بال string ل array بتحول ال
console.log(`toString() => ${numbers.toString()}`);
// One,Two,Three,Four,Five,Six,Seven



// الثالث يعني سيتم ارجاع العنصر الرابع لانه ببلش العد من صفر index المحدد في هذا المثال index بترجع العنصر الموجود بال
// undefined الموجود سيتم ارجاع range أكبر من ال index اذا تم ادخال 
// سالب سيبدأ العد من اليمين ابتداء من الرقم -1 index اذا تم ادخال
console.log(`at() => ${numbers.at(3)}`);
// Four



// method مفصول بين كل عنصر مع الي بعده بالفاصل المدخل داخل string ل array بتحول ال
// comma الفاصل فقط toString() انه هون نحنا منحدد ايش الي راح يفصل بين كل عنصر مع الي بعده بينما toString() بتختلف عن
console.log(`join() => ${numbers.join("|")}`);
// One|Two|Three|Four|Five|Six|Seven



// undefined فاضية برجع array وبترجع قيمته واذا كانت ال array بتحذف آخر عنصر بال
console.log(`pop() => ${numbers.pop()}`);
// Seven
console.log(`numbers after deleting the last value  => ${numbers}`);
// One,Two,Three,Four,Five,Six



// بعد اضافة العنصر array وبرجع طول ال array بتضيف عنصر لآخر ال
console.log(`push() => ${numbers.push("Seven")}`);
// 7



// المدخل وللتأكيد النسخة الأصلية لن يتم التعديل عليها وإنما الناتج هو نسخة جديدة index بحسب ال array بترجع نسخة من ال
console.log(`slice() => ${numbers.slice(2, 4)}`);
// Three,Four



// الأصلية array أخرى بدون التعديل على ال array ب array دمج ال
console.log(numbers.concat(["Nine", "Ten"]));
// ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Nine', 'Ten']