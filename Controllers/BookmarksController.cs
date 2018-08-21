using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace isracard.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
	public class BookmarksController : ControllerBase
    {
		/// <summary>
		/// Rest API's to handle session cache
		/// </summary>
		/// 
		string key = "repositoryBookmarks";

		// GET: api/Bookmarks
		[HttpGet]
		public IEnumerable<Item> Get()
        {
			var sessionItems = HttpContext.Session.Get<Item[]>(key);
			return sessionItems;
        }

		// POST: api/Bookmarks
		[HttpPost]
		public int Post([FromBody] Item item)
		{
			var sessionItems = HttpContext.Session.Get<Item[]>(key);
			if (sessionItems != null)
			{
				Item bookmarkedItem = Array.Find(sessionItems, i => i.id == item.id);

				if (bookmarkedItem != null)
				{
					return bookmarkedItem.id;
				}

				var sessionItemsList = sessionItems.ToList<Item>();
				sessionItemsList.Add(item);
				sessionItems = sessionItemsList.ToArray<Item>();

			} else
			{
				sessionItems = new[] { item };
			}

			HttpContext.Session.Set<Item[]>(key, sessionItems);
			var sessionItems2 = HttpContext.Session.Get<Item[]>(key);

			return item.id;
		}

		// Delete: api/Bookmarks
		[HttpDelete("{id}")]
		public IEnumerable<Item> Delete(int id)
		{
			// Get the session cache
			var sessionItems = HttpContext.Session.Get<Item[]>(key);
			if (sessionItems != null)
			{
				var items = new List<Item>(sessionItems);
				var itemToRemove = items.Single(i => i.id == id);
				items.Remove(itemToRemove);
				sessionItems = items.ToArray();
			}

			HttpContext.Session.Set<Item[]>(key, sessionItems);
			// sessionItems = HttpContext.Session.Get<Item[]>(key);

			return sessionItems;
		}

		// PUT: api/Bookmarks/5
		[HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

    }
}
