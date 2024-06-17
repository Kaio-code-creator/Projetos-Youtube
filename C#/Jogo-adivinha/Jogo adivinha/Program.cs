using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Jogo_adivinha
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Vamos jogar? Vou sortear um número de 1 a 10 e você tenta adivinhar.");
            Random random = new Random();
            int numeroSorteado = random.Next(11);
            bool jogadorAcertouNumero = false;

            while (jogadorAcertouNumero == false)
            {
                Console.WriteLine("Digite o número que vocÇe acha que foi sorteado.");
                string numeroDigitadoTexto = Console.ReadLine();
                int numeroDigitado = int.Parse(numeroDigitadoTexto);

                if (numeroDigitado == numeroSorteado)
                {
                    Console.WriteLine("Parabéns você acertou o número digitado");
                    jogadorAcertouNumero = true;
                }
                else
                {
                    Console.WriteLine("Opa não ... foi dessa vez");
                }
            }
            }

            Console.ReadKey();
        }
    }
}
