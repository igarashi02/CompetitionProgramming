object Main extends App {
    val line = scala.io.StdIn.readLine
    val s = line.split(" ")
    var str = ""
    for(i <- 1 to s(0).toInt){
      val line = scala.io.StdIn.readLine
      str = str + line
    }

    do {
      var word = if(str.length > s(2).toInt) str.substring(0, s(2).toInt) else str.substring(0, str.length)
      str = str.replace(word, "")
      println(word)
    } while(str.length > 0)
}
