using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApp.Controllers;
using WebApp.Infrastructure;
using WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using Xunit;
 
namespace WebAppTest
{
    public class PlanControllerTest
    {
        [Fact]
        public void Test_GET_AllPlans()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.Plans).Returns(Multiple());
            var controller = new PlanController(mockRepo.Object);
 
            // Act
            var result = controller.Get();
 
            // Assert
            var model = Assert.IsAssignableFrom<IEnumerable<Plan>>(result);
            Assert.Equal(3, model.Count());
        }
 
        private static IEnumerable<Plan> Multiple()
        {
            var r = new List<Plan>();
            r.Add(new Plan()
            {
                planId = 01,
                planType = "prepaid",
                planName = "ABC",
                planValidity = "28",
                planDetails = "XYZ",
                planPrice = "179"
            });
            r.Add(new Plan()
            {
                planId = 02,
                planType = "prepaid",
                planName = "ABC",
                planValidity = "28",
                planDetails = "XYZ",
                planPrice = "179"
            });
            r.Add(new Plan()
            {
                planId = 03,
                planType = "prepaid",
                planName = "ABC",
                planValidity = "28",
                planDetails = "XYZ",
                planPrice = "179"
            });
            return r;
        }

        [Fact]
        public void Test_POST_AddPlan()
        {
            // Arrange
            Plan r = new Plan()
            {
                planId = 04,
                planType = "prepaid",
                planName = "ABC",
                planValidity = "28",
                planDetails = "XYZ",
                planPrice = "179"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.AddPlan(It.IsAny<Plan>())).Returns(r);
            var controller = new PlanController(mockRepo.Object);
        
            // Act
            var result = controller.Post(r);
        
            // Assert
            var plan = Assert.IsType<Plan>(result);
            Assert.Equal(04, plan.planId);
            Assert.Equal("prepaid", plan.planType);
            Assert.Equal("ABC", plan.planName);
            Assert.Equal("28", plan.planValidity);
            Assert.Equal("XYZ", plan.planDetails);
            Assert.Equal("179", plan.planPrice);

        }

        [Fact]
        public void Test_PUT_UpdatePlan()
        {
            // Arrange
            Plan r = new Plan()
            {
                planId = 01,
                planType = "prepaid",
                planName = "new ABC",
                planValidity = "28",
                planDetails = "XYZ",
                planPrice = "179"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.UpdatePlan(It.IsAny<Plan>())).Returns(r);
            var controller = new PlanController(mockRepo.Object);
        
            // Act
            var result = controller.Put(r);
        
            // Assert
            var plan = Assert.IsType<Plan>(result);
            Assert.Equal(01, plan.planId);
            Assert.Equal("prepaid", plan.planType);
            Assert.Equal("new ABC", plan.planName);
            Assert.Equal("28", plan.planValidity);
            Assert.Equal("XYZ", plan.planDetails);
            Assert.Equal("179", plan.planPrice);
        }

        [Fact]
        public void Test_DELETE_Plan()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.DeletePlan(It.IsAny<int>())).Verifiable();
            var controller = new PlanController(mockRepo.Object);
        
            // Act
            controller.Delete(3);
        
            // Assert
            mockRepo.Verify();
        }
    }
}