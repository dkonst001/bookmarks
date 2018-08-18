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
		string key = "my-key";

		// GET: api/Bookmarks
		[HttpGet("[action]")]
		public IEnumerable<Item> Get()
        {
			var sessionItems = HttpContext.Session.Get<Item[]>(key);
			return sessionItems;
        }

		// POST: api/Bookmarks
		[HttpPost("[action]")]
		public int BookmarkRepository([FromBody] Item item)
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

		// POST: api/Bookmarks
		[HttpPost("[action]")]
		public int unBookmarkRepository([FromBody] Item item)
		{
			
			var sessionItems = HttpContext.Session.Get<Item[]>(key);
			if (sessionItems != null)
			{
				var bookmarks = new List<Item>(sessionItems);
				var index = bookmarks.IndexOf(item);
				bookmarks.RemoveAt(index);
				sessionItems = bookmarks.ToArray();
			}

			HttpContext.Session.Set<Item[]>(key, sessionItems);
			var sessionItems2 = HttpContext.Session.Get<Item[]>(key);

			return item.id;
		}

		// PUT: api/Bookmarks/5
		[HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

    }
}
