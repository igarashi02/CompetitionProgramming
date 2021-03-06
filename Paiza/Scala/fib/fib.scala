object Main{
  def fib(n : Int): Int = {
    n match {
      case 0 => 0
      case 1 => 1
      case n => fib(n-2)+fib(n-1)
    }
  }

  def main(args: Array[String]) = {
    val num = args(0).toInt
    println(fib(num))
  }
}
