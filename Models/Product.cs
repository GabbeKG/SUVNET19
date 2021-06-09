using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace WebMarket.Models
{
    public enum Categories
    {
        Computer, Games, TableTop, Books, Other
    }
    public class Product
    {
            
        public int id { get; set; }
        public string title { get; set; }
        public int price { get; set; }
        public string Description { get; set; }
        public string image { get; set; }
        public List<User> Users { get; set; }
        public Categories? categories { get; set; }
    }
}

