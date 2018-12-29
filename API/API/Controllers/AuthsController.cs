﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using API.Models;

namespace API.Controllers
{
    public class AuthsController : ApiController
    {
        private APIContext db = new APIContext();

        // GET: api/Auths
        public IQueryable<Auth> GetAuths()
        {
            return db.Auths;
        }

        // GET: api/Auths/5
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> GetAuth(string userName)
        {
            Auth auth = await db.Auths.FirstOrDefaultAsync(i => i.userName == userName);

            if (auth == null)
            {
                return NotFound();
            }

            return Ok(auth);
        }

        // PUT: api/Auths/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAuth(int id, Auth auth)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != auth.Id)
            {
                return BadRequest();
            }

            db.Entry(auth).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AuthExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Auths
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> PostAuth(Auth auth)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Auths.Add(auth);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = auth.Id }, auth);
        }

        // DELETE: api/Auths/5
        [ResponseType(typeof(Auth))]
        public async Task<IHttpActionResult> DeleteAuth(int id)
        {
            Auth auth = await db.Auths.FindAsync(id);
            if (auth == null)
            {
                return NotFound();
            }

            db.Auths.Remove(auth);
            await db.SaveChangesAsync();

            return Ok(auth);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AuthExists(int id)
        {
            return db.Auths.Count(e => e.Id == id) > 0;
        }
    }
}